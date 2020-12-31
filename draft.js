let t = {};
let f = null;

t || console.log('|| t');
f || console.log('|| f');
t && console.log('&& t');
f && console.log('&& f');
console.log(4)

// if (candidate) {
//   return res.status(400).json({message: 'User with this email already exists'});
// }
