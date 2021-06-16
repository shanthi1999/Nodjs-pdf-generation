function Success(data) {
  return {
    status: true,
    data,
  };
}

function Error(data) {
    return {
      status: false,
      data,
    };
  }

  module.exports={Success,Error}