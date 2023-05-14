const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
// const { sign } = require('jsonwebtoken');
const { signToken } = require('../utils/auth');
// const { sign } = require('jsonwebtoken');


const resolvers = {
    Query: {


    },

    Mutation: {
        async login(parent, { email, password }) {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('no user found with this email address');

            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user }
        },
        async addUser(_, { email, username, password }) {
            const user = await User.create({
                email: email,
                username: username,
                password: password,
            });
            const token = signToken(user);
            return { token, user }
        },

        async saveBook(parent, { author, title, bookId, image, link } , context){
            if (context.user){
                const user = await User.findOneAndUpdate(
                    {_id:context.user._id},
                    { $push: { savedBooks: { author, title, bookId, image, link } } },
                    { new: true }
                );
                return user;
            } else {
              throw new AuthenticationError('You need to be logged in!');
            }
            
        }
    },

}
module.exports = resolvers;
