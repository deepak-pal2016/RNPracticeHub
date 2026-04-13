module.exports = {
 presets: ['module:@react-native/babel-preset'],
 plugins:[
  [
    "module-resolver",
    {
      root:["./"],
      alias:{
        "@components": "./src/components",
        "@screens": "./src/screens",
        "@styles": "./src/styles",
        "@utils":"./src/utils",
        "@redux": "./src/redux",
        "@assets":"./src/assets",
        "@services":"./src/services"
      }
    }
  ]
 ]
};
