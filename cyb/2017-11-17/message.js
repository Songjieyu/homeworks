var debug = require('debug')('xxx');
function Message(event){
  this.event = event;
  debug('log:' +'userMessage : constructor');
  let self = this;
  this.event.on('user_register', function (socket, flag) {
    self.onUserRegister(socket, flag);
  });
  this.event.on('user_login', function (socket, flag) {
    return self.onUserLogin(socket, flag);
  });
}

Message.prototype.onUserRegister = function (socket, flag) {
  if (flag) {
    socket.write('恭喜您，注册成功\n');
  } else {
    socket.write('该账号已被注册，请重新输入账号密码\n');
  }
};

Message.prototype.onUserLogin = function (socket, flag) {
  if (flag) {
    socket.write('登录成功\n');
  } else {
    socket.write('密码错误\n');
  }
};

exports.Message = Message;
