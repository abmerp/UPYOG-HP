import Urls from "../atoms/urls";
import { Request } from "../atoms/Utils/Request";

export const Form11Service = {
  create: (data) =>
    Request({
      url: Urls.form11.create,
      data: data,
    //  multipartData: data,
      useCache: false,
      setTimeParam: false,
      userService: true,
      method: "POST",
    //   params: { tenantId },
      auth: true,
      multipartFormData: true
    })
};