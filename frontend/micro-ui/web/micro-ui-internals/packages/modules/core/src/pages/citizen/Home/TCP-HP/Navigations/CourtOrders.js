import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  {
    slNo: '1.',
    caseNo: 'Civil Appeal (D) no. 14669/ 2019',
    title: 'State of H.P vs. Yogendra Mohan Sengupta.',
    nature: 'NGT judgment dated 16.11.2017 challenged being extra-jurisdictional and scope of NGT.',
    nextDate: 'Not given',
  },
  {
    slNo: '2.',
    caseNo: 'Civil Appeal Diary no. 44451/ 2018.',
    title: 'Pushpinder Singh Chopra versus SPOKE and others.',
    nature: 'Construction of HPTDC Hotel at Kasauli challenged, which was approved by NGT vide its order dated 05.10.2018.',
    nextDate: 'Not given',
  },
  {
    slNo: '3.',
    caseNo: 'Civil Appeal no. 4526 of 2019',
    title: 'Kasauli Hoteliers Resident Welfare Associations versus SPOKE',
    nature: 'NGT judgment dated 05.10.2018 challenged being extra-jurisdictional and the scope of NGT.',
    nextDate: 'Not given',
  },
  {
    slNo: '4.',
    caseNo: 'Civil Appeal no. 10377 of 2017',
    title: 'Hotel Kasauli Inn. &anr. versus SPOKE',
    nature: 'NGT judgment dated 05.10.2018 challenged being extra-jurisdictional and the scope of NGT.',
    nextDate: 'Not given',
  },
  {
    slNo: '5.',
    caseNo: 'Civil Appeal Diary no. 14669 of 2019.',
    title: 'State of Himachal versus SPOKE & others.',
    nature: 'NGT judgment dated 05.10.2018 challenged being extra-jurisdictional and the scope of NGT.',
    nextDate: 'Not given',
  },
  {
    slNo: '6.',
    caseNo: 'Civil Appeal no.2823/ 2018',
    title: 'Ramesh Chand versus State of Himachal Pradesh & others',
    nature: 'NGT order dated 8.12.2017 challenged',
    nextDate: 'Not given',
  },
  {
    slNo: '7.',
    caseNo: 'Civil Appeal no. 829 of 2019',
    title: 'M/S Citrus Manali Resorts Pvt. Ltd. versus Ramesh Chand and others',
    nature: 'NGT order dated 8.12.2017 challenged',
    nextDate: 'Not given',
  },
  {
    slNo: '8.',
    caseNo: 'SLP- (C) no. 2865-66/ 2014',
    title: 'HPCA versus State of H.P & ors.',
    nature: 'Issue of construction of HPCA ground and diversion of Forest land etc.',
    nextDate: 'Not given',
  },
  {
    slNo: '',
    caseNo: '',
    title: '',
    nature: 'NATIONAL GREEN TRIBUNAL.',
    nextDate: '',
  },
  {
    slNo: '9.',
    caseNo: 'O.A. no. 104/ 2018',
    title: 'Shiv Pal Bhagat vs. State of H.P',
    nature: 'Illegal setting up of 2 septic tanks and one electric transformer in complete violation of Article 21 of the Constitution of India.',
    nextDate: 'Not given',
  },
  {
    slNo: '10.',
    caseNo: 'O.A No. 606/2018',
    title: 'Solid Waste Management Rules 2016 &amp; other environmental issues.',
    nature: 'Preparing of a State Policy and Management strategies',
    nextDate: 'Not Given',
  },
  {
    slNo: "11",
    caseNo: "CWP no. 4869/ 2021",
    title: "GurucharanKaur vs. State",
    nature: "Disconnection of electricity on account of unauthorized construction in Manali.",
    nextDate: "Not given"
  },
  {
    slNo: "12",
    caseNo: "CWP no. 2243/ 2021",
    title: "M/S Himachal Conductors Ltd. vs. State of H.P",
    nature: "Issue of permission under Section 118 of HPT&amp;LRA, 1972 and apartments.",
    nextDate: "Not given"
  },
  {
    slNo: "13",
    caseNo: "CWP no. 4439/ 2021",
    title: "Tulsia vs. State of H.P",
    nature: "Unauthorized construction of building in Solan.",
    nextDate: "Not given"
  },
  {
    slNo: "14",
    caseNo: "CWPIL no. 13/ 2021",
    title: "Kusum Bali vs. State of H.P",
    nature: "To regulate TCP Act in Kummarhatti-Dagshai area.",
    nextDate: "Not given"
  },
  {
    slNo: "15",
    caseNo: "CWP no. 873/ 2021",
    title: "Suresh Kumar vs. State of H.P",
    nature: "Service matter.",
    nextDate: "Not given"
  },
  {
    slNo: "16",
    caseNo: "CWP no. 3832/ 2021",
    title: "Diamond Traexim vs. State of H.P",
    nature: "Construction of M/S Nirvana Woods project and its planning permission.",
    nextDate: "Not given"
  },
  {
    slNo: "17",
    caseNo: "COPC no. 14/ 2021",
    title: "M/S Himland Housing vs. State of H.P",
    nature: "Contempt of Court proceedings/ order\n\nSection 118 permission lapse.",
    nextDate: "Not given"
  },
  {
    slNo: "18",
    caseNo: "CWPIL no. 20/ 2021",
    title: "UdayPanwar vs. State of H.P",
    nature: "Unauthorized construction of building near Kasumpti.",
    nextDate: "Not given"
  },
  {
    slNo: "19",
    caseNo: "CWP no. 2470/ 2021",
    title: "Shagun Sharma vs. State of H.P",
    nature: "Service matter/ Transfer of P.O on complaint",
    nextDate: "Not given"
  },
  {
    slNo: "20",
    caseNo: "CWP no. 692/ 2021",
    title: "Ravi Kumar versus State of H.P &amp; ors",
    nature: "Construction of petrol pump challenged",
    nextDate: "Not given"
  },
  {    slNo: "21.",    caseNo: "CWP no. 5038/ 2021",    title: "Mohinder Singh versus State of H.P & ors.",    nature: "Allotment of shop MC Dharamshala.",    nextDate: "Not given"  },  {    slNo: "22.",    caseNo: "CRMMO no. 204/ 2021",    title: "Savita Sharma versus State of H.P & ors.",    nature: "Quashing of FIR. Forgery of documents, Solan. Quashing of FIR. Forgery of documents, Solan.",    nextDate: "Not given"  },  {    slNo: "23.",    caseNo: "RSA no. 15/ 2021",    title: "Govind versus Santosh Kumar/State of H.P & ors.",    nature: "Civil litigation qua suit land/ substantial question of law.",    nextDate: "Not given"  },  {    slNo: "24.",    caseNo: "CWP no. 3833/ 2021",    title: "SumitKhanna versus UOI & ors.",    nature: "Regarding order of HP RERA on real estate project.",    nextDate: "Not given"  },  {    slNo: "25.",    caseNo: "CWP no. 5982/ 2021",    title: "PuneetKanwar versus State of H.P & ors.",    nature: "Job on compassionate grounds",    nextDate: "Not given"  },  {    slNo: "26.",    caseNo: "LPA no. 89/ 2021",    title: "Ruma Devi versus State of H.P & ors.",    nature: "Service benefits of deceased employee including GPF etc.",    nextDate: "Not given"  },  {    slNo: "27.",    caseNo: "Execution petition no. 13/ 2021",    title: "MrityunjayTripathiversus State of H.P & ors.",    nature: "Execution of NGT order passed in the judgment dated 16.11.2017.",    nextDate: "Not given"  },  {    slNo: "28.",    caseNo: "CMPMO 84/ 2020",    title: "Rani Kukreja vs. State of H.P",    nature: "Regarding dismissal of Civil Suits having same cause of action in lower Courts.",    nextDate: "Not given"  },  {    slNo: "29.",    caseNo: "CWP no. 442/ 2020",    title: "Jagdish Chand versus State of HP",    nature: "Planning permission and approvals with Section 16-C.",    nextDate: "Not given"  },  {    slNo: "30.",    caseNo: "CWP no. 3715/ 2020",    title: "Neelam Boris versus State of HP",    nature: "Installation of mobile towers at buildings in Shimla near Aukland House School.",    nextDate: "Not given"  },
  {
    slNo: "31.",
    caseNo: "CWP no. 628/ 2020",
    title: "BhagwanDasi versus State of HP (Connected matter with CWPIL no. 15/ 14)",
    nature: "Composition of deviations of building- Shimla- Kalka NH",
    nextDate: "Not given"
  },
  {
    slNo: "32.",
    caseNo: "CWP no. 1503/ 2020",
    title: "RajanBadhan versus State of HP",
    nature: "Planning permission and approval case.",
    nextDate: "Not given"
  },
  {
    slNo: "33.",
    caseNo: "CWP no. 2825 2020",
    title: "Ajay Sharma versus State of HP",
    nature: "Violation of Section 16-C, SADA Una.",
    nextDate: "Not given"
  },
  {
    slNo: "34.",
    caseNo: "CWP no. 1893/ 2020",
    title: "Naresh Kumar versus State of HP",
    nature: "Planning permission and approval case.",
    nextDate: "Not given"
  },
  {
    slNo: "35.",
    caseNo: "CWPOA no. 5761/ 2020",
    title: "Virender Kumar vs. State of H.P",
    nature: "Service matter\nSADA employees claiming pay scale and service benefits",
    nextDate: "Not given"
  },
  {
    slNo: "36.",
    caseNo: "CWPOA no. 4929/ 2020",
    title: "Ashok Kumar vs. State of H.P",
    nature: "Service matter.\n\nSADA employees claiming pay scale and service benefits.",
    nextDate: "Not given"
  },
  {
    slNo: "37.",
    caseNo: "CWPOA no. 4923/ 2020",
    title: "Arun Kumar vs. State of H.P",
    nature: "Service matter.\n\nSADA employees claiming pay scale and service benefits.",
    nextDate: "Not given"
  },
  {
    slNo: "38.",
    caseNo: "CWPOA no. 4921/ 2020",
    title: "Rajeev Sharma vs. State of H.P",
    nature: "Service matter.\n\nSADA employees claiming pay scale and service benefits.",
    nextDate: "Not given"
  },
  {
    slNo: "39.",
    caseNo: "CWP no. 3739/ 2020",
    title: "Mahesh Dutt Sharma versus State of HP",
    nature: "Regarding unauthorized construction in Rampur.",
    nextDate: "Not given"
  },
  {
    slNo: "40.",
    caseNo: "CWP no. 935/ 2020",
    title: "Rajni Devi versus State of HP",
    nature: "Case of planning permission and approvals, MC Dharamshala.",
    nextDate: "Not given"
  },
  {
    "slNo": "41.",
    "caseNo": "CWP no. 935/ 2020",
    "title": "Rajni Devi versus State of HP",
    "nature": "Case of planning permission and approvals, MC Dharamshala.",
    "nextDate": "Not given"
    },
    {
    "slNo": "42.",
    "caseNo": "CWP no. 6029/ 2020",
    "title": "SYSCO versus State of H.P & ors.",
    "nature": "Construction of petrol pump challenged",
    "nextDate": "Not given"
    },
    {
    "slNo": "43.",
    "caseNo": "CWP no. 4325/ 2020",
    "title": "Bemloi Development & Infrastructure Pvt. Ltd. versus State of H.P & ors.",
    "nature": "Planning permission case for apartments, Shimla",
    "nextDate": "Not given"
    },
    {
    "slNo": "44.",
    "caseNo": "CWP no. 1447/ 2020",
    "title": "JaneshMahajan versus State of H.P & ors.",
    "nature": "Planning permission case, Dalhousie, Chamba",
    "nextDate": "Not given"
    },
    {
    "slNo": "45.",
    "caseNo": "CWP no. 1462/ 2019",
    "title": "Satish Kumar versus State of HP (Connected matter with CWPIL no. 15/ 14)",
    "nature": "Composition of deviations of building- Shimla- Kalka NH.",
    "nextDate": "Not given"
    },
    {
    "slNo": "46.",
    "caseNo": "CWP no. 2077/ 2019",
    "title": "Madhusoodan versus State of H.P & ors.",
    "nature": "Regarding unauthorized construction in MC Dharamshala.",
    "nextDate": "Not given"
    },
    {
    "slNo": "47.",
    "caseNo": "CWP no. 2774/ 2019",
    "title": "AmanGuleria versus State of H.P & ors.",
    "nature": "Regarding unauthorized construction in MC Dharamshala.",
    "nextDate": "Not given"
    },
    {
    "slNo": "48.",
    "caseNo": "CWP no. 4389/ 2019",
    "title": "BaldevAtri versus State of H.P & ors.",
    "nature": "Regarding the construction of HP Secretariat employee association at AadityaVihar, Shimla",
    "nextDate": "Not given"
    },
    {
    "slNo": "49.",
    "caseNo": "CWP no. 1716/ 2019",
    "title": "Prithvi Chand versus State of H.P & ors.",
    "nature": "Service matter. Regularization of services and benefits.",
    "nextDate": "Not given"
    },
    {
    "slNo": "50.",
    "caseNo": "CWP no. 2086/ 2019",
    "title": "State of HP versus Ramesh Chand & ors.",
    "nature": "NGT order dated 29.07.2019 challenged being without jurisdiction",
    "nextDate": "Not given"
    },
    {
      slNo: "51.",
      caseNo: "CWP no. 2874/ 2019",
      title: "Mehar Chand versus State of H.P & ors.",
      nature: "Service matter. Regularization of services and benefits.",
      nextDate: "Not given"
      },
      {
      slNo: "52.",
      caseNo: "CWPIL no. 12/ 2019",
      title: "Court on its on motion versus State of H.P & ors.",
      nature: "Persons with Disabilities to be provided adequate toilets, barrier free access etc",
      nextDate: "Not given"
      },
      {
      slNo: "53.",
      caseNo: "CWP no. 2607/ 2019",
      title: "Dev Krishnan versus State of H.P & ors.",
      nature: "Matter pertaining to SADA, Kinnaur.",
      nextDate: "Not given"
      },
      {
      slNo: "54.",
      caseNo: "CWP no. 1465/ 2019",
      title: "Srijan Sharma versus State of H.P & ors.",
      nature: "Permission to carry out construction in green area of Shimla Planning area.",
      nextDate: "Not given"
      },
      {
      slNo: "55.",
      caseNo: "CWP no. 604/ 2019",
      title: "Udho Builders Pvt. Ltd. versus State of H.P & ors.",
      nature: "Case of Planning permission for apartments, Solan.",
      nextDate: "Not given"
      },
      {
      slNo: "56.",
      caseNo: "CWP no. 200/ 2019",
      title: "Devinder Singh versus State of H.P & ors.",
      nature: "Planning permission and approvals MC Dharamshala.",
      nextDate: "Not given"
      },
      {
      slNo: "57.",
      caseNo: "CWP no. 1140/ 2019",
      title: "Sandeep Kumar versus State of H.P & ors.",
      nature: "Composition of deviations/ unauthorized construction in a building, Manali.",
      nextDate: "Not given"
      },
      {
      slNo: "58.",
      caseNo: "CWP no. 3120/ 2019",
      title: "Rakesh Kumar versus State of Himachal Pradesh & ors.",
      nature: "Regarding planning permission, Bilaspur",
      nextDate: "Not given"
      },
      {
      slNo: "59.",
      caseNo: "CWP no. 2610/ 2019",
      title: "PoonamGehlot versus State of Himachal Pradesh & ors.",
      nature: "Regarding challenging of Rule 35 of the HP TCP Act being ultra vires.",
      nextDate: "Not given"
      },
      {
      slNo: "60.",
      caseNo: "CWP no. 925/ 2019",
      title: "Satpal versus State of H.P & ors.",
      nature: "Planning permission and approvals, SADA Una",
      nextDate: "Not given"
      },
      {
        "slNo": "61.",
        "caseNo": "CWP no. 1208/ 2018",
        "title": "Mulkh Raj versus State of H.P &amp; ors.",
        "nature": "Planning permission and approvals, Dalhousie.",
        "nextDate": "Not given"
      },
      {
        "slNo": "62.",
        "caseNo": "CWP no. 1716/ 2018",
        "title": "HP Secretariat Employees Cooperative Housing Society (regd.) versus State of H.P &amp; ors.",
        "nature": "Planning permission and approvals.",
        "nextDate": "Not given"
      },
      {
        "slNo": "63.",
        "caseNo": "Review petition no. 78/ 2018",
        "title": "State of H.P versus Hitanshu Jistu.\n(Retention policy case.)",
        "nature": "Review for saving Section 30-B of HP TCP (Amendment) Act, 2016 quashed by High Court on 22.12.2017.",
        "nextDate": "Not given"
      },
      {
        "slNo": "64.",
        "caseNo": "Review petition no. 79/ 2018",
        "title": "State of H.P versus RaghavGoel.\n(Retention policy case.)",
        "nature": "Review for saving Section 30-B of HP TCP (Amendment) Act, 2016 quashed by High Court on 22.12.2017.",
        "nextDate": "Not given"
      },
      {
        "slNo": "65.",
        "caseNo": "Review petition no. 80/ 2018",
        "title": "State of H.P versus AbhimanyuRathor.\n(Retention policy case.)",
        "nature": "Review for saving Section 30-B of HP TCP (Amendment) Act, 2016 quashed by High Court on 22.12.2017.",
        "nextDate": "Not given"
      },
      {
        "slNo": "66.",
        "caseNo": "CWP no. 825/ 2018",
        "title": "KundanLalVerma versus State of Himachal Pradesh &amp; ors.",
        "nature": "Implications of Section 30-A of the HP TCP Act and appendix-8 of the HP TCP Rules for exemption of construction in rural areas.(Lambhidhar)",
        "nextDate": "Not given"
      },
      {
        "slNo": "67.",
        "caseNo": "CWP no. 826/2018",
        "title": "Harvinder Singh versus State of Himachal Pradesh &amp; ors.",
        "nature": "Implications of Section 30-A of the HP TCP Act and appendix-8 of the HP TCP Rules for exemption of construction in rural areas.(Lambhidhar)",
        "nextDate": "Not given"
      },
      {
        "slNo": "68.",
        "caseNo": "CWP no. 828/ 2018",
        "title": "AkshaySood versus State of Himachal Pradesh &amp; ors.",
        "nature": "Implications of Section 30-A of the HP TCP Act and appendix-8 of the HP TCP Rules for exemption of construction in rural areas.(Lambhidhar)",
        "nextDate": "Not given"
      },
      {
        "slNo": "69.",
        "caseNo": "CWP no. 829/ 2018",
        "title": "Samni Devi versus State of Himachal Pradesh",
        "nature": "Implications of Section 30-A of the HP TCP Act and appendix-8 of the HP TCP Rules for exemption of construction in rural areas.(Lambhidhar)",
        "nextDate": "Not given"
      },
      {
        "slNo": "70.",
        "caseNo": "CWP no. 827/ 2018",
        "title": "NeerajGhunta versus State of Himachal Pradesh  &amp; ors.",
        "nature": "Implications of Section 30-A of the HP TCP Act and appendix-8 of the HP TCP Rules for exemption of construction in rural areas.(Lambhidhar)",
        "nextDate": "Not given"
      },
]

const CourtOrders = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Sample Table" style={{width: '90%', margin: '30px'}}>
        <TableHead>
          <TableRow style={{background: '#1F4A7C', height: '20px'}}>
            <TableCell style={{width: '5%', color: 'white'}}>SL. No</TableCell>
            <TableCell style={{width: '15%', color: 'white'}}>Case No</TableCell>
            <TableCell style={{width: '35%', color: 'white'}}>Title of the Case</TableCell>
            <TableCell style={{width: '35%', color: 'white'}}>Nature of the Case</TableCell>
            <TableCell style={{width: '10%', color: 'white'}}>Next Date</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.slNo}>
              <TableCell component="th" scope="row">
                {row.slNo}
              </TableCell>
              <TableCell>{row.caseNo}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.nature}</TableCell>
              <TableCell>{row.nextDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourtOrders;

