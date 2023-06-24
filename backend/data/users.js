import bcrypt from 'bcryptjs';


const users=[
    {
        name:'Rahul Rajesh',
        email:'rahulrajesh20012309gmail.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'Adam',
        email:'Adam20012309gmail.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'Snoopy',
        email:'Snoopy20012309gmail.com',
        password:bcrypt.hashSync('123456',10)
    },
]
export default users;