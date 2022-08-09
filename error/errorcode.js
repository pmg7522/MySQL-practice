module.exports = {
  emptyUsername: {
    status: 400,
    message: "아이디를 입력해주세요.",
    errorCode: "MSL400001"
  },

  emptyPassword: {
    status: 400,
    message: "비밀번호를 입력해주세요.",
    errorCode: "MSL400002"
  },

  invalidLoginData: {
    status: 401,
    message: "아이디나 비밀번호가 틀렸습니다.",
    errorCode: "MSL401001"
  },

  notFoundUser: {
    status: 404,
    message: "해당 유저를 찾을 수 없습니다.",
    errorCode: "MSL404001"
  },

  unknownError: {
    status: 500,
    message: "오류가 발생하였습니다.",
    errorCode: "MSL999999"
  }
} 