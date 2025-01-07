# Desfio Rockeseat: Mapeando o Domínio

Nessa atividade eu tive que ler uma conversa entre um Domain Expert e um desenvolvedor responsável por criar a aplicação. O objetivo é identificar as entidades e casos de uso para essa aplicação com base nessa conversa!

**Leia a Entrevista para se contextualizar no arquivo entrevista.md**

## O que você deve procurar?

Dado o diálogo da entrevista, as seguintes perguntas devem ser respondidas:

- Quais as entidades de domínio?
- Quais as ações (casos de uso) que essa aplicação deve ter?

### Detalhes

- A aplicação se trata de um sistema de gerenciamento de estoque.

### Entidades de Domínio

- Produto
- Mensagem de Alerta
- Venda
- Ordem de Compra

### Casos de Uso

- Rastrear Produto por um identificador único
- Enviar Alertas por Email
- Atualizar o número de itens em estoque para cada produto
- Atualizar o limite mínimo de estoque para cada produto
- Gerar Histórico de Vendas
- Criar Ordens de Compra de com base nas Quantidades Mínimas de Estoque
- Buscar o Histórico de Vendas
- Criar Ordens de Compra
- Criar uma nova Venda
- Criar uma novo Produto possibilitando definir um limite mínimo de estoque

## Requesitos Funcionais

- [x] deve ser possível criar um novo produto
- [x] deve ser possível rastrear cada produto individualmente
- [x] deve ser possível criar uma ordem de compra
- [x] deve ser possível definir quantidades mínimas de estoque
- [x] deve ser possível visualizar o histórico de vendas
- [x] deve ser possível gerar um relatório de vendas dentro de um período desejado agregando a performance dos produtos vendidos e a performance das vendas

## Regras de Negócio

- [x] assim que um produto atingir o limite mínimo de estoque, devem ser enviados alertas automaticamente por email e para o sistema de gerenciamento informando sobre ocorrido
- [x] assim que um produto atingir o limite mínimo de estoque, uma nova ordem de compra deve ser criada automaticamente

## Requesitos Funcionais

- [x] deve ser possível integrar o sistema com com outros sistemas, como os fornecedores, por exemplo.
