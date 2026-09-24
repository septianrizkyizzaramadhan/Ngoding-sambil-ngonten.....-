const config = {
    env: 'secret',
    port: 9090,
    dbHost: 'localhost',
    dbUser: 'root',
    dbPw: 1
}

const {env, ...dbConfig} = config //...dbConfig

console.log(env)
console.log(dbConfig)