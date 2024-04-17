Documentacion de la api utilizada de jira:
https://developer.atlassian.com/cloud/jira/platform/rest/v2/

En esta app se puede realizar issues o incidencias directamente en jira a partir de los datos recibidos por un usuario 

Variables de entorno necesarias para que la app de jira funcione:
ATLASSIAN_USERNAME= nombre de usuario del jira
ATLASSIAN_API_KEY=esta api la sacamos desde nuestro perfil de jira
LEAD_ACCT_ID=para sacar esta variable debemos hacer un get a la ruta "/api/jira/users" y ahi obtenemos esta variable de entorno

DOMAIN="nombre del dominio que nos genera attlasian al entrar a jira"
PROJECT_KEY="la key del proyecto"
PROJECT_NAME="el nombre del proyecto"

EJ:(asi quedaria)
ATLASSIAN_USERNAME=juanmer382@gmail.com
ATLASSIAN_API_KEY=ATATT3xFfGF0_MsaYgq9x_-w_nTN6e1K1hedIYc_n3ekFc_A7VC1jov5xToBiQiyeMPPPKhnW4kIbMoXfgld3Nu_lFWPr6vilCmPgj8NR_XWYRgKZbjq_RkAUSsPg21ZPiwKgYEUmoi-KvMS2HxOfL3riIu19pl58FyXFTwN4RoEMsHQtgPRaa0=A3C006EE
LEAD_ACCT_ID=557058:f58131cb-b67d-43c7-b30d-6b58d40bd077
DOMAIN=thejb29
PROJECT_KEY=PROYEC
PROJECT_NAME=proyectoPrueba