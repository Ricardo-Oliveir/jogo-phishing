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
  {
    id: 11,
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " recursos.humanos@empresa-famosa.com"),
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Oportunidade de Emprego Urgente"),
      React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
      React.createElement("p", null, "Vimos seu perfil no LinkedIn e ficamos impressionados. Temos uma vaga de gerente com salário competitivo. Clique no link para se candidatar e ver os detalhes. As vagas são limitadas."),
      React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline break-all" }, "http://empresa-famosa-careers.net/apply")
    ),
    type: 'phishing',
    explanation: 'Phishing. O link usa um domínio que não é o oficial da empresa. Ofertas de emprego que pressionam por uma candidatura rápida devem ser vistas com cautela.'
  },
  {
    id: 12,
    scenario: React.createElement("div", { className: "text-base p-4 bg-green-100 dark:bg-green-900/50 rounded-lg border border-green-200 dark:border-green-700/50" },
      React.createElement("p", { className: "font-bold" }, "Mensagem no WhatsApp:"),
      React.createElement("p", null, "Olá! Sou o [Seu Nome] do futuro. Apenas um lembrete amigável de que você é incrível. Continue assim!")
    ),
    type: 'not_phishing',
    explanation: 'Não é phishing. Embora seja uma mensagem estranha, não há links maliciosos ou pedidos de informação. É inofensiva.'
  },
  {
    id: 13,
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " cloud-storage@mail.com"),
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Seu armazenamento está cheio"),
      React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
      React.createElement("p", null, "Seu armazenamento em nuvem está quase cheio. Para evitar a perda de arquivos, faça upgrade agora e ganhe 50% de desconto. A oferta termina hoje."),
      React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline" }, "Fazer Upgrade Agora")
    ),
    type: 'phishing',
    explanation: 'Phishing. O remetente é genérico e não menciona o provedor de nuvem (Google Drive, Dropbox, etc.). A urgência e o desconto são táticas para fazer você clicar sem pensar.'
  },
  {
    id: 14,
    scenario: React.createElement("div", { className: "text-base p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-700/50" },
      React.createElement("p", { className: "font-bold" }, "SMS de um amigo:"),
      React.createElement("p", null, "Ei, me empresta 50 reais? Te pago amanhã. Minha conta está bloqueada. Pix: [chave aleatória]")
    ),
    type: 'phishing',
    explanation: 'Phishing. Este é um golpe comum. O número do seu amigo pode ter sido clonado ou roubado. Sempre confirme por outro meio (ligação) antes de fazer qualquer transferência.'
  },
  {
    id: 15,
    scenario: React.createElement("div", { className: "text-base p-4 bg-green-100 dark:bg-green-900/50 rounded-lg border border-green-200 dark:border-green-700/50" },
      React.createElement("p", { className: "font-bold" }, "Notificação do Instagram:"),
      React.createElement("p", null, "Alguém tentou fazer login na sua conta de um dispositivo desconhecido. Se não foi você, altere sua senha.")
    ),
    type: 'not_phishing',
    explanation: 'Não é phishing. Esta é uma notificação de segurança legítima. É importante não clicar em links, mas ir diretamente ao aplicativo ou site para alterar a senha.'
  },
  {
    id: 16,
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " suporte@uber.com"),
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Problema com sua última viagem"),
      React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
      React.createElement("p", null, "Houve um problema com o pagamento da sua última viagem. Por favor, atualize seus dados de pagamento para continuar usando nossos serviços."),
      React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline" }, "Atualizar Pagamento")
    ),
    type: 'phishing',
    explanation: 'Phishing. Embora o e-mail pareça legítimo, a Uber geralmente resolve problemas de pagamento através do aplicativo, não por e-mail. É mais seguro verificar o app.'
  },
  {
    id: 17,
    scenario: React.createElement("div", { className: "text-base p-4 bg-green-100 dark:bg-green-900/50 rounded-lg border border-green-200 dark:border-green-700/50" },
      React.createElement("p", { className: "font-bold" }, "QR Code em um panfleto de evento:"),
      React.createElement("p", null, "Escaneie para comprar ingressos. O QR leva ao site oficial do evento, com informações claras e opções de pagamento seguras.")
    ),
    type: 'not_phishing',
    explanation: 'Não é phishing. O QR code leva ao site oficial, o que é um uso seguro. Sempre verifique o domínio para garantir que é o correto.'
  },
  {
    id: 18,
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " servico-cliente@amazon-br.com"),
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Seu pedido foi cancelado"),
      React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
      React.createElement("p", null, "Seu pedido de um novo smartphone foi cancelado. Se você não fez isso, sua conta pode estar comprometida. Clique para verificar sua conta."),
      React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline" }, "Verificar Conta")
    ),
    type: 'phishing',
    explanation: 'Phishing. O domínio do remetente é falso ("amazon-br.com" em vez de "amazon.com.br"). A mensagem cria pânico para que você clique sem verificar.'
  },
  {
    id: 19,
    scenario: React.createElement("div", { className: "text-base p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-700/50" },
      React.createElement("p", { className: "font-bold" }, "SMS de sua operadora:"),
      React.createElement("p", null, "Parabéns! Você foi selecionado para receber um upgrade gratuito para nosso plano 5G. Clique no link para ativar."),
      React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline break-all" }, "http://bit.ly/upgrade-5g-gratis")
    ),
    type: 'phishing',
    explanation: 'Phishing. O link encurtado esconde o destino real. As operadoras geralmente fazem upgrades através de canais oficiais, como o aplicativo ou o site.'
  },
  {
    id: 20,
    scenario: React.createElement("div", { className: "text-base p-4 bg-green-100 dark:bg-green-900/50 rounded-lg border border-green-200 dark:border-green-700/50" },
      React.createElement("p", { className: "font-bold" }, "E-mail de confirmação de voo:"),
      React.createElement("p", null, "Sua reserva de voo para o Rio de Janeiro está confirmada. O e-mail contém todos os detalhes da viagem e um link para o site da companhia aérea para fazer o check-in.")
    ),
    type: 'not_phishing',
    explanation: 'Não é phishing. E-mails de confirmação são comuns e, desde que o link leve ao site oficial, são seguros.'
  },
  {
    id: 21,
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " segurança@banco-digital.com"),
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Verificação de segurança necessária"),
      React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
      React.createElement("p", null, "Para cumprir novas regulamentações, precisamos que você confirme seus dados. Anexamos um formulário seguro. Baixe, preencha e nos envie de volta."),
    ),
    type: 'phishing',
    explanation: 'Phishing. Bancos nunca pedem para você baixar e preencher formulários com dados sensíveis. A verificação é sempre feita no ambiente seguro do site ou aplicativo.'
  },
  {
    id: 22,
    scenario: React.createElement("div", { className: "text-base p-4 bg-green-100 dark:bg-green-900/50 rounded-lg border border-green-200 dark:border-green-700/50" },
      React.createElement("p", { className: "font-bold" }, "Pop-up no seu navegador:"),
      React.createElement("p", null, "Este site usa cookies para melhorar sua experiência. [Botão: Aceitar]")
    ),
    type: 'not_phishing',
    explanation: 'Não é phishing. Este é um aviso de cookies padrão e exigido por lei em muitas regiões. É seguro aceitar em sites confiáveis.'
  },
  {
    id: 23,
    scenario: React.createElement("div", { className: "text-base p-4 bg-blue-100 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-700/50" },
      React.createElement("p", { className: "font-bold" }, "QR Code em um estacionamento:"),
      React.createElement("p", null, "Pague seu estacionamento escaneando o QR code. Ele te leva para uma página que pede os dados do seu cartão de crédito, mas o site não tem HTTPS e o design é suspeito.")
    ),
    type: 'phishing',
    explanation: 'Phishing. Golpes com QR code em estacionamentos são cada vez mais comuns. A falta de HTTPS é um grande sinal de que o site não é seguro para inserir dados de pagamento.'
  },
  {
    id: 24,
    scenario: React.createElement("div", { className: "text-base font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700" },
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "De:"), " noreply@discord.com"),
      React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Assunto:"), " Você recebeu um presente: 1 mês de Nitro!"),
      React.createElement("hr", { className: "my-2 border-gray-200 dark:border-gray-600" }),
      React.createElement("p", null, "Um amigo te deu um mês de Discord Nitro! Clique no botão abaixo para resgatar. Você precisará fazer login para ativar."),
      React.createElement("a", { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault(), className: "text-blue-600 dark:text-blue-400 underline" }, "Resgatar Nitro")
    ),
    type: 'phishing',
    explanation: 'Phishing. Embora o e-mail pareça oficial, este é um golpe comum no Discord. O link leva a uma página de login falsa para roubar suas credenciais.'
  },
  {
    id: 25,
    scenario: React.createElement("div", { className: "text-base p-4 bg-green-100 dark:bg-green-900/50 rounded-lg border border-green-200 dark:border-green-700/50" },
      React.createElement("p", { className: "font-bold" }, "Mensagem de um bot no Telegram:"),
      React.createElement("p", null, "Lembrete: sua assinatura do serviço de streaming de música expira em 3 dias. Acesse o site oficial para renovar.")
    ),
    type: 'not_phishing',
    explanation: 'Não é phishing. Desde que o bot não forneça um link direto e apenas o lembre de ir ao site oficial, a mensagem é segura.'
  }
];