import axios from 'axios'
import "dotenv/config";

const username = process.env.ATLASSIAN_USERNAME
const password = process.env.ATLASSIAN_API_KEY
const domain = process.env.DOMAIN

const auth = {
  username: username,
  password: password
};


export async function createIssue(projectKey, issueType, summary, description) {

  try {
    const baseUrl = 'https://' + domain + '.atlassian.net';
    const data = {
      fields: {
        project: { key: projectKey },
        summary: summary,
        description: description,
        issuetype: { name: issueType }
      }
    };
    const config = {
      headers: { 'Content-Type': 'application/json' },
      auth: auth
    };
    const response = await axios.post(`${baseUrl}/rest/api/2/issue`, data, config);
    console.log(response.data)
    return response.data;

  } catch (error) {
    console.log('error: ')
    console.log(error.response.data.errors)
  }
}
