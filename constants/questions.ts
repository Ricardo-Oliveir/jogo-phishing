import { Question } from '../types';
import React from 'react';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    // FIX: Converted JSX to React.createElement to be valid in a .ts file.
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " support@paypall.com"),
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Alerta de Segurança Urgente!"),
      React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
      React.createElement("p", null, "Prezado cliente,"),
      React.createElement("p", { className: "mt-2" }, "Detectamos atividade suspeita em sua conta. Para sua segurança, sua conta foi temporariamente bloqueada. Por favor, clique no link abaixo para verificar sua identidade e desbloquear sua conta."),
      React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline break-all" }, "http://paypall-security-check.com/login")
    ),
    type: 'phishing',
    explanation: 'Isto é phishing. O domínio do remetente está escrito incorretamente ("paypall" em vez de "paypal"). O link também leva a um domínio suspeito, não ao site oficial do PayPal.'
  },
  {
    id: 2,
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
        React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " Netflix <info@service.netflix.com>"),
        React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Sua assinatura expirou"),
        React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
        React.createElement("p", null, "Sua assinatura expirou. Para manter sua conta, por favor atualize suas informações de pagamento."),
        React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline" }, "Atualize agora")
    ),
    type: 'not_phishing',
    explanation: 'Este e-mail é provavelmente legítimo. O domínio "service.netflix.com" é um subdomínio válido da Netflix. No entanto, a melhor prática é sempre navegar diretamente para o site oficial em vez de clicar em links.'
  },
  {
    id: 3,
    scenario: React.createElement("div", { className: "text-base p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-700/50" },
      React.createElement("p", { className: "font-bold" }, "SMS de +1-555-123-4567:"),
      React.createElement("p", null, "Você ganhou um iPhone 14! Clique aqui para reivindicar seu prêmio: ", React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline break-all" }, "bit.ly/your-free-iphone"))
    ),
    type: 'phishing',
    explanation: 'Isto é phishing (smishing). Ofertas "boas demais para ser verdade" são um grande sinal de alerta. O link encurtado esconde o destino real, que provavelmente é um site malicioso.'
  },
  {
    id: 4,
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " ceo@suaempresa.com"),
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Pedido Urgente"),
      React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
      React.createElement("p", null, "Estou em uma reunião e preciso que você compre alguns vales-presente para clientes imediatamente. Responda a este e-mail para eu te passar os detalhes. Preciso disso em 30 minutos.")
    ),
    type: 'phishing',
    explanation: 'Isto é um ataque de spear phishing (Comprometimento de E-mail Empresarial). O fraudador se passa por uma figura de autoridade (CEO) para criar um senso de urgência e solicitar uma ação incomum e financeiramente prejudicial.'
  },
    {
    id: 5,
    scenario: React.createElement("div", { className: "text-base p-4 bg-green-100 dark:bg-green-900/50 rounded-lg border border-green-200 dark:border-green-700/50" },
      React.createElement("p", { className: "font-bold" }, "Notificação do App:"),
      React.createElement("p", null, "Seu código de verificação para o Google é: G-123456. Não compartilhe com ninguém.")
    ),
    type: 'not_phishing',
    explanation: 'Esta é uma notificação legítima de autenticação de dois fatores (2FA). É seguro, desde que você mesmo tenha iniciado a ação de login.'
  },
  {
    id: 6,
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
        React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " Microsoft Security <security-alert@microsft.com>"),
        React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Tentativa de login incomum"),
        React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
        React.createElement("p", null, "Detectamos uma tentativa de login em sua conta de um local desconhecido. Se não foi você, clique aqui para proteger sua conta: ", React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline" }, "Proteger Conta"))
    ),
    type: 'phishing',
    explanation: 'Isto é phishing. O domínio do remetente está escrito incorretamente ("microsft" em vez de "microsoft"). Este é um erro sutil projetado para enganar o leitor.'
  },
  {
    id: 7,
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " Fisco <notificacao@impostos-gov.com>"),
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Você tem direito a uma restituição de imposto de €250,45"),
      React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
      React.createElement("p", null, "Nossos registros indicam que você pagou impostos a mais. Por favor, preencha o formulário anexo para receber sua restituição. É necessário o seu número de segurança social.")
    ),
    type: 'phishing',
    explanation: 'Isto é phishing. Agências governamentais raramente iniciam contato por e-mail para restituições. O domínio é falso e eles nunca pediriam informações sensíveis por e-mail.'
  },
  {
    id: 8,
    scenario: React.createElement("div", { className: "text-base p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-700/50" },
      React.createElement("p", { className: "font-bold" }, "SMS da sua operadora:"),
      React.createElement("p", null, "Sua fatura mensal de R$ 75,00 está disponível. Veja os detalhes e pague em: [link oficial da operadora].")
    ),
    type: 'not_phishing',
    explanation: 'Esta é provavelmente uma mensagem legítima. Muitas empresas enviam notificações de fatura por SMS. A chave é verificar se o link leva ao domínio oficial da empresa.'
  },
  {
    id: 9,
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " Suporte Técnico"),
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " ATUALIZAÇÃO DE SOFTWARE OBRIGATÓRIA"),
      React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
      React.createElement("p", null, "Sua senha de e-mail expira em 24 horas. Para manter o acesso, você DEVE clicar no link abaixo e inserir sua senha atual para atualizá-la."),
      React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline break-all" }, "http://suaempresa.com.update-service.net")
    ),
    type: 'phishing',
    explanation: 'Isto é phishing. O link é projetado para parecer legítimo, mas o domínio real é "update-service.net", não "suaempresa.com". Empresas legítimas não pedem para você inserir sua senha atual em um link de e-mail.'
  },
  {
    id: 10,
    scenario: React.createElement("div", { className: "text-base p-4 bg-green-100 dark:bg-green-900/50 rounded-lg border border-green-200 dark:border-green-700/50" },
      React.createElement("p", { className: "font-bold" }, "QR Code em um restaurante:"),
      React.createElement("p", null, "Um QR code está na mesa para você ver o menu. Ao escanear, ele abre uma página web no domínio oficial do restaurante com o menu listado.")
    ),
    type: 'not_phishing',
    explanation: 'Este é um uso legítimo de um QR code. A chave é verificar se o URL para o qual ele te direciona é o esperado e corresponde ao site oficial do estabelecimento.'
  },
  // FIX: Explicitly set the return type of the map callback to 'Question' to prevent TypeScript from incorrectly widening the 'type' property to a generic 'string'.
  ...Array.from({ length: 40 }).map((_, i): Question => {
    const id = i + 11;
    const isPhishing = Math.random() > 0.4;
    if(isPhishing) {
        const phishingTypes = [
            {
                scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " Banco Online <alerta@online-banco-seguranca.com>"),
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Atividade Incomum na sua Conta"),
                    React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
                    React.createElement("p", null, "Detectamos uma transferência suspeita de R$1.500. Se não foi você, cancele imediatamente clicando aqui. Você tem 1 hora antes que a transferência seja finalizada."),
                    React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline" }, "Cancelar Transferência")
                ),
                explanation: 'Phishing. Domínio falso e senso de urgência são táticas clássicas. Bancos pedem que você acesse sua conta diretamente pelo site ou app oficial, nunca por links em e-mails.'
            },
            {
                scenario: React.createElement("div", { className: "text-base p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-700/50" },
                    React.createElement("p", { className: "font-bold" }, "SMS de \"Correios\":"),
                    React.createElement("p", null, "Sua encomenda não pode ser entregue devido a uma taxa de alfândega de R$3,50. Pague aqui para liberar a entrega: ", React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline break-all" }, "correios-taxa.info"))
                ),
                explanation: 'Phishing (smishing). Embora a taxa seja pequena (para parecer inofensiva), o objetivo é roubar os detalhes do seu cartão de crédito. O site não é o oficial dos Correios.'
            },
            {
                scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " Amigo (conta de e-mail hackeada)"),
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Veja isso!"),
                    React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
                    React.createElement("p", null, "Oi, você precisa ver esse vídeo, é hilário!"),
                    React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline break-all" }, "http://funny-videos-online.ru/video.mov")
                ),
                explanation: 'Phishing. E-mails de contas comprometidas são comuns. O link para um domínio russo (.ru) é altamente suspeito e provavelmente leva a um malware.'
            },
            {
                scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " LinkedIn <jobs@linkedin-notifications.com>"),
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Você apareceu em 4 buscas esta semana"),
                    React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
                    React.createElement("p", null, "Recrutadores estão procurando por candidatos como você. Veja quem te procurou e se candidate a vagas recomendadas."),
                    React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline" }, "Ver Buscas")
                ),
                explanation: 'Phishing. Domínio quase perfeito, mas "linkedin-notifications.com" não é o oficial. A grafia correta é crucial. O objetivo é roubar suas credenciais do LinkedIn.'
            }
        ];
        const selected = phishingTypes[id % phishingTypes.length];
        return {
            id,
            scenario: selected.scenario,
            type: 'phishing',
            explanation: selected.explanation
        }
    } else {
        const notPhishingTypes = [
            {
                scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " Amazon.com.br <order-update@amazon.com.br>"),
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Seu pedido Amazon.com.br de \"Fone de Ouvido\" foi enviado"),
                    React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
                    React.createElement("p", null, "Olá [Seu Nome],"),
                    React.createElement("p", null, "Boas notícias! Seu pedido foi enviado. Você pode rastreá-lo aqui: [link de rastreamento oficial]")
                ),
                explanation: 'Não é phishing. O e-mail é personalizado com seu nome, o domínio é o oficial da Amazon Brasil e se refere a uma compra que você provavelmente fez. '
            },
            {
                scenario: React.createElement("div", { className: "text-base p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-700/50" },
                    React.createElement("p", { className: "font-bold" }, "SMS da sua clínica:"),
                    React.createElement("p", null, "Lembrete de consulta: Você tem uma consulta com Dr. Silva amanhã, 14/10, às 10:30. Responda SIM para confirmar ou LIGUE para [número da clínica] para reagendar.")
                ),
                explanation: 'Não é phishing. Mensagens de lembrete de consulta são um serviço comum e legítimo. Não há links suspeitos, e a instrução é responder ou ligar para um número conhecido.'
            },
             {
                scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " newsletter@bancointer.com.br"),
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Novidades da semana e dicas de investimento"),
                    React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
                    React.createElement("p", null, "Confira as últimas atualizações do mercado financeiro e veja nossas dicas para fazer seu dinheiro render mais. [Links para o blog oficial do banco].")
                ),
                explanation: 'Não é phishing. Este é um boletim informativo (newsletter) de um domínio legítimo. Ele não pede informações pessoais nem cria um senso de urgência.'
            },
            {
                scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " do-not-reply@steampowered.com"),
                    React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Sua Recibo da Steam"),
                    React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
                    React.createElement("p", null, "Obrigado por sua recente compra na Steam. Seu recibo está abaixo. [Detalhes da compra].")
                ),
                explanation: 'Não é phishing. O domínio "steampowered.com" é o oficial da Steam. Este é um e-mail transacional padrão enviado após uma compra.'
            }
        ];
        const selected = notPhishingTypes[id % notPhishingTypes.length];
        return {
            id,
            scenario: selected.scenario,
            type: 'not_phishing',
            explanation: selected.explanation
        }
    }
  })
];