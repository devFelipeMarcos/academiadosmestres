"use server";

import AbacatePay from "abacatepay-nodejs-sdk";

const { TOKEN_API, URL } = process.env;

const abacate = AbacatePay(TOKEN_API as string);

export const createPayment = async (
  plan: string,
  character: string,
  price: number,
  email: string,
  name: string,
  phone: string
) => {
  const valorEmCentavos = Math.round(price * 100);

  // Criar parâmetros para a URL de retorno
  const returnParams = new URLSearchParams({
    plan: plan,
    character: character,
    price: price.toString(),
    name: name,
    email: email,
  });

  //Create a one-time payment
  const billing = await abacate.billing.create({
    frequency: "ONE_TIME",
    methods: ["PIX"],
    products: [
      {
        externalId: "PRO-PLAN",
        name: plan,
        quantity: 1,
        price: valorEmCentavos, // Amount in cents
      },
    ],
    returnUrl: `${URL}/success?${returnParams.toString()}`,
    completionUrl: `${URL}/success?${returnParams.toString()}`,
    customer: {
      email: email,
      name: name,
      cellphone: phone,
      taxId: "534.706.030-14", // CPF GERADO NO 4DEV
    },
  });

  return billing;
};
