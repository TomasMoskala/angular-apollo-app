import { intArg, mutationType, stringArg, arg } from '@nexus/schema'

export const Mutation = mutationType({
  definition(t) {
    t.field('login', {
      type: 'user',
      args: {
        user_id: intArg({ nullable: false }), 
      },
      resolve: async(_, { user_id } , ctx) => { 
        const result = await ctx.prisma.user.findOne({ 
          where: { user_id },      
        });
        if (result === null) {
          throw new Error(`blah blah`)
        }
        return result
      }
    })

    t.field('register', {
      type: 'user',
      args: {
        user_name: stringArg({ nullable: false }),
      },
      resolve: (_, {user_name }, ctx) => { 
          console.log('args', {user_name });
          return ctx.prisma.user.create({ data: { user_name } })
      },
    })
  },
})
