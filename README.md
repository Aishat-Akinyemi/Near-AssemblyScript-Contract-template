# Near-AssemblyScript-Smartcontract-template

This is a boilerplate/template project that you can clone as template for your simple smartcontracts on NEAR written in AssemblyScript. 

# **Software Requirements**
 - Node.js ≥ 12
 - Yarn ``npm install --global yarn``

After cloning this repository, you should do the following:

- Install the dependencies by simply running `yarn` or ` yarn install ` 
- Initialise As-pect tests by running ` yarn asp --init `
- Run tests `yarn asp`  

# **Deployment**

You need to have the near-cli installed before you deploy. If you do not have this already installed,
run ````

# **File Structure**
```
assembly                        //assembly folder contains the AS files and test files
│    ├──__tests__               //test older                                
│    │   ├── as-pect.d.ts       // as-pect type declaration file   
│    │   └── main.unit.spec.ts  // this is our unit test file
│    ├──as_types.d.ts           //as typed declaration file
│    ├──index.ts                // this contains our smart contract code and it is the entry file used to compile AS code to WASM
│    └──tsconfig.json           //ts config file    
├── out                         //this folder would contain the compiled wasm│   
├──as-pect.config.js            //config file with config added to make the project suitable for use with near-sdk-a
├──asconfig.json                //AS config file with config added to make the project suitable for use with near-sdk-as
├──package.json                 //contains scripts and dependency list
└── yarn.lock                   // yarn dependencies list
```



