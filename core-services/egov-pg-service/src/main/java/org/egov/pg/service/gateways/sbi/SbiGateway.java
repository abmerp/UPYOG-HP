package org.egov.pg.service.gateways.sbi;

import java.net.URI;
import java.security.InvalidKeyException;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;
import java.util.Collections;
import java.util.Map;
import java.util.TreeMap;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

import org.egov.pg.models.Transaction;
import org.egov.pg.service.Gateway;
import org.egov.pg.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class SbiGateway implements Gateway {

	private static final String GATEWAY_NAME = "sbi";
	private static final String PARAM_SEPARATOR = "|";
	private String MERCHANT_ID;
	private String MERCHANT_ENCRYPTION_KEY;
	private String REDIRECT_URL;
	private String AGGREGATOR_ID;
	private boolean ACTIVE;

	private static String ENC_DEC_ALGO = "RSA";
	Cipher cipher = null;
	KeyFactory keyFactory = null;
	@Autowired
	private RestTemplate restTemplate;

	public SbiGateway(RestTemplate restTemplate, Environment environment) {
		this.restTemplate = restTemplate;

		ACTIVE = Boolean.valueOf(environment.getRequiredProperty("sbi.active"));
		MERCHANT_ID = environment.getRequiredProperty("sbi.merchant.id");
		MERCHANT_ENCRYPTION_KEY = environment.getRequiredProperty("sbi.encryption.Key");
		REDIRECT_URL = environment.getRequiredProperty("sbi.redirect.URL");
		AGGREGATOR_ID = environment.getRequiredProperty("sbi.aggregator.id");

		try {
			cipher = Cipher.getInstance(ENC_DEC_ALGO);
			keyFactory = KeyFactory.getInstance(ENC_DEC_ALGO);
		} catch (NoSuchAlgorithmException | NoSuchPaddingException e) {
			e.printStackTrace();
		}

	}

	@Override
	public URI generateRedirectURI(Transaction transaction) {
		TreeMap<String, String> paramMap = new TreeMap<>();
		StringBuffer paramValue = new StringBuffer();
		String paramValueEncripted = null;
		byte[] encryptedMessage;
		log.info("generateRedirectURI : ACTIVE:" + ACTIVE + " MERCHANT_ID:" + MERCHANT_ID + " MERCHANT_ENCRYPTION_KEY:"
				+ MERCHANT_ENCRYPTION_KEY + " REDIRECT_URL:" + REDIRECT_URL + " AGGREGATOR_ID:" + AGGREGATOR_ID);
		// MerchantId|OperatingMode|MerchantCountry|MerchantCurrency|Order
		// Amount|OtherDetails|SuccessURL|FailURL|AggregatorId|MerchantOrderNo|Merchant
		// Customer ID|Pay Mode|Access Medium|Transaction Source
		paramValue.append(MERCHANT_ID).append(PARAM_SEPARATOR).append("DOM").append(PARAM_SEPARATOR).append("IN")
				.append(PARAM_SEPARATOR).append("INR").append(PARAM_SEPARATOR).append(transaction.getTxnAmount())
				.append(PARAM_SEPARATOR).append(transaction.getProductInfo()).append(PARAM_SEPARATOR)
				.append("http://103.166.62.118:80/tl-services/new/transaction/v1/_redirect").append(PARAM_SEPARATOR)
				.append("http://103.166.62.118:80/tl-services/new/transaction/v1/_redirect").append(PARAM_SEPARATOR)
				.append(AGGREGATOR_ID).append(PARAM_SEPARATOR).append(transaction.getBillId()).append(PARAM_SEPARATOR)
				.append(transaction.getConsumerCode()).append(PARAM_SEPARATOR).append("NB").append(PARAM_SEPARATOR)
				.append("ONLINE").append(PARAM_SEPARATOR).append("ONLINE");
		log.info("generateRedirectURI : paramValue:" + paramValue.toString());

		try {
			cipher.init(Cipher.ENCRYPT_MODE, getDecodedPrivatekey(MERCHANT_ENCRYPTION_KEY));
			encryptedMessage = cipher.doFinal(paramValue.toString().getBytes());
			paramValueEncripted = Base64.getEncoder().encodeToString(encryptedMessage);
			log.info("generateRedirectURI : paramValueEncripted:" + paramValueEncripted);
		} catch (InvalidKeyException | IllegalBlockSizeException | BadPaddingException e) {
			throw new RuntimeException("There is exception while encrypting the message:" + e.getStackTrace());
		}

		paramMap.put("MultiAccountInstructionDtls", paramValueEncripted);
		MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
		paramMap.forEach((key, value) -> params.put(key, Collections.singletonList(value)));

		UriComponents uriComponents = UriComponentsBuilder.fromHttpUrl(REDIRECT_URL).queryParams(params).build()
				.encode();

		return uriComponents.toUri();

	}

	@Override
	public Transaction fetchStatus(Transaction currentStatus, Map<String, String> params) {
		return null;

	}

	@Override
	public boolean isActive() {
		// TODO Auto-generated method stub
		return ACTIVE;
	}

	@Override
	public String gatewayName() {
		// TODO Auto-generated method stub
		return GATEWAY_NAME;
	}

	@Override
	public String transactionIdKeyInResponse() {
		// TODO Auto-generated method stub
		return "CCAVENUEmerchantid";
	}

	private Transaction transformRawResponse(SbiResponse resp, Transaction currentStatus) {
		log.info("transformRawResponse : SbiResponse:" + resp);
		Transaction.TxnStatusEnum status = Transaction.TxnStatusEnum.PENDING;

		if (resp.getStatus().equalsIgnoreCase("TXN_SUCCESS"))
			status = Transaction.TxnStatusEnum.SUCCESS;
		else if (resp.getStatus().equalsIgnoreCase("TXN_FAILURE"))
			status = Transaction.TxnStatusEnum.FAILURE;

		return Transaction.builder().txnId(currentStatus.getTxnId())
				.txnAmount(Utils.formatAmtAsRupee(resp.getTxnAmount())).txnStatus(status).gatewayTxnId(resp.getTxnId())
				.gatewayPaymentMode(resp.getPaymentMode()).gatewayStatusCode(resp.getRespCode())
				.gatewayStatusMsg(resp.getRespMsg()).responseJson(resp).build();

	}

	@Override
	public String generateRedirectFormData(Transaction transaction) {
		// TODO Auto-generated method stub
		return null;
	}

	public PrivateKey getDecodedPrivatekey(String privateKeyStr) {
		byte[] privateBytes = Base64.getDecoder().decode(privateKeyStr);
		PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(privateBytes);
		PrivateKey privateKey = null;
		try {
			privateKey = keyFactory.generatePrivate(keySpec);
		} catch (InvalidKeySpecException e) {
			log.error("There is exception while decoding private key:" + e.getStackTrace());
		}
		return privateKey;
	}
}
