import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456789', 10),
        isAdmin: true
    },
    {
        name: 'Jack Smith',
        email: 'jsmith@example.com',
        password: bcrypt.hashSync('123456789', 10),

    },
    {
        name: 'Don Smith',
        email: 'dsmith@example.com',
        password: bcrypt.hashSync('123456789', 10),
    }
]
export default users