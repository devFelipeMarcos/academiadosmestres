"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Mail,
  Phone,
  MessageCircle,
  Home,
  Download,
  Calendar,
} from "lucide-react";
import Link from "next/link";

interface OrderData {
  orderId: string;
  planName: string;
  character: string;
  price: number;
  customerName: string;
  customerEmail: string;
  date: string;
}

export default function SucessoPage() {
  const searchParams = useSearchParams();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  // Previne SSR/CSR mismatch: só renderiza depois de montar
  useEffect(() => {
    if (!searchParams) return;

    const generateRandomId = () =>
      "APY-" + Math.random().toString(36).substr(2, 9).toUpperCase();

    const data: OrderData = {
      orderId: searchParams.get("orderId") ?? generateRandomId(),
      planName: searchParams.get("plan") ?? "Plano Selecionado",
      character: searchParams.get("character") ?? "MENTOR",
      price: searchParams.get("price")
        ? parseFloat(searchParams.get("price") as string)
        : 0,
      customerName: searchParams.get("customerName") ?? "Cliente",
      customerEmail: searchParams.get("customerEmail") ?? "cliente@email.com",
      date: searchParams.get("date") ?? new Date().toLocaleDateString("pt-BR"),
    };

    setOrderData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (!orderData) {
    // opcional: placeholder de carregamento
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Carregando...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header de Sucesso */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <CheckCircle className="h-20 w-20 text-green-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">
              Pagamento Confirmado!
            </h1>
            <p className="text-xl text-gray-300">
              Sua jornada de aprendizado começa agora!
            </p>
          </div>

          <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
            Pedido #{orderData.orderId}
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Detalhes do Pedido */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                Detalhes do Pedido
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Plano:</span>
                  <span className="text-white font-semibold">
                    {orderData.planName}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Mentor:</span>
                  <span className="text-yellow-400 font-semibold">
                    {orderData.character}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Valor:</span>
                  <span className="text-green-400 font-bold text-lg">
                    R$ {orderData.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Data:</span>
                  <span className="text-white">{orderData.date}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Status:</span>
                  <Badge className="bg-green-500 text-white">Confirmado</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Próximos Passos */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-400" />
                Próximos Passos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Confirmação por Email",
                    desc: "Você receberá um email com os detalhes do seu plano em até 5 minutos.",
                  },
                  {
                    step: 2,
                    title: "Acesso ao Conteúdo",
                    desc: "Seu acesso será liberado em até 24 horas. Você receberá as instruções por email.",
                  },
                  {
                    step: 3,
                    title: "Suporte Disponível",
                    desc: "Nossa equipe está pronta para te ajudar. Entre em contato quando precisar!",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{title}</h4>
                      <p className="text-gray-300 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Informações de Contato */}
        <Card className="bg-gray-800 border-gray-700 mt-8">
          <CardHeader>
            <CardTitle className="text-white text-center">
              Precisa de Ajuda?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  line1: "felipe.ti404@gmail.com",
                  line2: "Resposta em até 24h",
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  line1: "(61) 99431-8490",
                  line2: "Seg à Sex, 9h às 18h",
                },
                {
                  icon: Phone,
                  title: "Telefone",
                  line1: "(61) 99431-8490",
                  line2: "Seg à Sex, 9h às 18h",
                },
              ].map(({ icon: Icon, title, line1, line2 }) => (
                <div key={title} className="space-y-2">
                  <Icon className="h-8 w-8 text-blue-400 mx-auto" />
                  <h4 className="text-white font-semibold">{title}</h4>
                  <p className="text-gray-300 text-sm">{line1}</p>
                  <p className="text-gray-400 text-xs">{line2}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 text-white font-semibold px-8 py-3">
              <Home className="h-5 w-5 mr-2" />
              Voltar ao Início
            </Button>
          </Link>

          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3"
            onClick={() => window.print()}
          >
            <Download className="h-5 w-5 mr-2" />
            Baixar Comprovante
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <p className="text-gray-400 text-sm">
            Obrigado por escolher a Academia dos Mestres! 🎓
          </p>
          <p className="text-gray-500 text-xs mt-2">
            * Este é um projeto educacional inspirado em "Todo Mundo Odeia o
            Chris"
          </p>
        </div>
      </div>
    </div>
  );
}
