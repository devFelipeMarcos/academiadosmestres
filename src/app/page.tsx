"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, Briefcase, Zap } from "lucide-react";
import Image from "next/image";
import { createPayment } from "./_actions/createPayment";

interface Plan {
  id: string;
  name: string;
  character: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
  color: string;
  characterImage: string;
  characterQuote: string;
}

const plans: Plan[] = [
  {
    id: "perigo",
    name: "Malandragem das Ruas",
    character: "PERIGO",
    price: 49.9,
    description: "Aprenda com o mestre da malandragem",
    characterQuote:
      "Ei moleque, vem cá que eu vou te ensinar como é que se faz!",
    features: [
      "Manual completo de malandragem urbana",
      "Técnicas de persuasão do Perigo",
      "Como identificar oportunidades na rua",
      "Rede de contatos do bairro",
      "Dicas de como não ser pego",
      "Suporte via WhatsApp (quando não tiver correndo)",
    ],
    icon: <Zap className="h-6 w-6" />,
    color: "from-red-500 to-red-700",
    characterImage: "/perigo.jpeg",
  },
  {
    id: "julius",
    name: "Mestre da Economia",
    character: "JULIUS",
    price: 79.9,
    description: "Economize como nunca e tenha múltiplas fontes de renda",
    characterQuote: "Chris, você precisa aprender o valor do dinheiro!",
    features: [
      "Como ter 2, 3 ou até 4 empregos",
      "Técnicas avançadas de economia doméstica",
      "Planilhas de controle financeiro do Julius",
      "Como negociar TUDO na vida",
      "Receitas caseiras que custam centavos",
      "Curso de reparos domésticos",
      "Consultoria financeira personalizada",
    ],
    popular: true,
    icon: <DollarSign className="h-6 w-6" />,
    color: "from-green-500 to-green-700",
    characterImage: "/julius.jpg",
  },
  {
    id: "malvo",
    name: "Operações Especiais",
    character: "MALVO",
    price: 129.9,
    description: "Para os mais corajosos e estratégicos",
    characterQuote: "Isso aqui não é brincadeira, moleque!",
    features: [
      "Planejamento estratégico de operações",
      "Técnicas de infiltração e discrição",
      "Como avaliar riscos e oportunidades",
      "Equipamentos e ferramentas especiais",
      "Rotas de fuga e pontos seguros",
      "Código de conduta profissional",
      "Suporte 24h para emergências",
      "Seguro de vida incluso",
    ],
    icon: <Briefcase className="h-6 w-6" />,
    color: "from-purple-500 to-purple-700",
    characterImage: "/malvo.jpg?height=200&width=500",
  },
];

export default function CharacterPlans() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPlan) {
      return;
    }

    try {
      const billing = await createPayment(
        selectedPlan.name,
        selectedPlan.character,
        selectedPlan.price,
        formData.email,
        formData.name,
        formData.phone
      );

      const url = billing?.data?.url;
      if (!url) {
        throw new Error("URL de pagamento não retornada.");
      }

      if (url.startsWith("http")) {
        window.location.href = url;
      } else {
        // Interna ao Next.js
        router.push(url);
      }
    } catch (err: any) {
      console.error(err);
    } finally {
    }
  };

  const handleBackToPlans = () => {
    setSelectedPlan(null);
    setFormData({ name: "", phone: "", email: "" });
  };

  if (selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="mb-4">
              <Image
                src={selectedPlan.characterImage || "/placeholder.svg"}
                alt={selectedPlan.character}
                width={80}
                height={80}
                className="rounded-full mx-auto border-4 border-yellow-400"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Finalizar Pedido
            </h1>
            <p className="text-gray-300">
              Plano:{" "}
              <span className="text-yellow-400 font-semibold">
                {selectedPlan.name}
              </span>
            </p>
            <p className="text-gray-300">
              Mentor:{" "}
              <span className="text-yellow-400 font-semibold">
                {selectedPlan.character}
              </span>
            </p>
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                {selectedPlan.icon}
                {selectedPlan.name}
              </CardTitle>
              <CardDescription className="text-gray-300">
                R$ {selectedPlan.price.toFixed(2).replace(".", ",")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    pattern="\d{11}"
                    placeholder="11999999999"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBackToPlans}
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Voltar
                  </Button>
                  <Button
                    type="submit"
                    className={`flex-1 bg-gradient-to-r ${selectedPlan.color} hover:opacity-90 text-white font-semibold`}
                  >
                    Finalizar Compra
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Todo mundo odeia o <span className="text-yellow-400">Chris</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aprenda com os maiores especialistas do bairro! Cada um com sua
            expertise única para te ensinar os segredos da vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 ${
                plan.popular ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-semibold">
                  MAIS PROCURADO
                </Badge>
              )}

              <CardHeader className="text-center">
                <div className="mb-4">
                  <Image
                    src={plan.characterImage || "/placeholder.svg"}
                    alt={plan.character}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto border-4 border-gray-600"
                  />
                </div>

                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center text-white`}
                >
                  {plan.icon}
                </div>

                <CardTitle className="text-2xl text-white">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-yellow-400 font-semibold text-lg">
                  com {plan.character}
                </CardDescription>
                <CardDescription className="text-gray-300 text-base italic">
                  "{plan.characterQuote}"
                </CardDescription>
                <div className="text-4xl font-bold text-white mt-4">
                  R$ {plan.price.toFixed(2).replace(".", ",")}
                  <span className="text-lg text-gray-400 font-normal">
                    /mês
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 text-center">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3 text-lg`}
                >
                  Aprender com {plan.character}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            * Conteúdo fictício para fins educacionais. Inspirado nos
            personagens de "Todo Mundo Odeia o Chris"
          </p>
        </div>
      </div>
    </div>
  );
}
