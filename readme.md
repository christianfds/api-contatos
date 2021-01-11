
# API Contatos
## Como executar
Após realizar o clone do repositório, basta inicializar os serviços com o comando *(é recomendado criar um arquivo .env para definir um secret para a geração dos tokens jwt)*:
```bash
docker-compose up -d
```
## Usuário
Existem dois usuários, para realizar as requisições é necessário um token obtido através das seguintes credenciais:

 - Varejão:
	```
	email: user@varejao.com.br
	senha: varejao123
	 ```

 - Macapa:
	```
	email: user@macapa.com.br
	senha: macapa123
	 ```	

## Endpoints
 ### **[POST] /auth**
 Recebe as informações de autenticação de um usuário e retorna um token com validade de 5 minutos. *Este token deve ser enviado no Authorization Header.*

 - **Parâmetros do body:**
	```json
	{
		"email": "",
		"password": ""
	}
	 ```
 - Retorno em caso de sucesso:
	 - **Status:** 200 - Ok
	 - **Conteúdo:**
		```json
		{
			"type": "Bearer",
			"token": "<token>"
		}
		 ```
 - Retorno em caso de falha:
	 - **Status:** 401 - Unauthorized
	 - **Conteúdo:**
		```json
		{
			"message": "Invalid credentials",
		}
		 ```

 ### **[POST] /contacts**
 Realiza a inserção dos contatos informados no banco de dados do respectivo cliente.
  - **Parâmetros do body:**
	```json
	{
		"contacts": [
			{
				"name": "",
				"cellphone": ""
			},
		]
	}
	 ```
 - Retorno em caso de sucesso:
	 - **Status:** 200 - Ok
	 - **Conteúdo:**
		```json
		{
			"message": "Sucess",
		}
		 ```
 - Retorno em caso de falha:
	 - **Status:** 401 - Unauthorized
	 - **Conteúdo:**
		```json
		{
			"message": "Invalid credentials",
		}
		 ```

 ### **[GET] /contacts**
 Realiza a busca de todos os contatos cadastrados pelo usuário.
 - Retorno em caso de sucesso:
	 - **Status:** 200 - Ok
	 - **Conteúdo:**
		```json
		{
			"length": 1,
			"contacts": [
				{
					"id": 1,
					"name": "",
					"cellphone": ""
				}
			]
		}
		 ```
 - Retorno em caso de falha:
	 - **Status:** 401 - Unauthorized
	 - **Conteúdo:**
		```json
		{
			"message": "Invalid credentials",
		}
		 ```

### **[GET] /contacts/:id**
 Realiza a busca do contato especificado pelo id.
 - Retorno em caso de sucesso:
	 - **Status:** 200 - Ok
	 - **Conteúdo:**
		```json
		{
			"length": 1,
			"contacts": [
				{
					"id": 1,
					"name": "",
					"cellphone": ""
				}
			]
		}
		 ```
 - Retorno em caso de falha:
	 - **Status:** 401 - Unauthorized
	 - **Conteúdo:**
		```json
		{
			"message": "Invalid credentials",
		}
		 ```