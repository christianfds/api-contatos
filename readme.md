# API Contatos
## Como executar
Após realizar o clone do repositório, basta acessar o mesmo e instalar as dependências utilizando o npm:
```bash
npm install
```
Em seguida é necessário criar os containers de dev com:
```bash
docker-compose up -d
```
E por fim executar a aplicação utilizando:
```bash
npm start
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
		"email": "string",
		"password": "string"
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
				"name": "string",
				"cellphone": "string"
			},
		]
	}
	 ```
 - Retorno em caso de sucesso:
	 - **Status:** 200 - Ok
	 - **Conteúdo:**
		```json
		{
			"message": "Sucesso",
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

