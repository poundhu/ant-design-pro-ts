const isDEV = true;
module.exports = {
  name: '铱云运营系统',
  prefix: '/api',
  openPages: ['/User', '/User/Login', '/User/Register', '/User/RegisterResult'],
  serverUrl: isDEV ? '' : 'http://localhost:3000'
}
