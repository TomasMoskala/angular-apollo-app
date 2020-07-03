import { queryType } from '@nexus/schema'

export const Query = queryType({
  definition(t) {
    t.field('me', {
      type: 'user',
      nullable: true,
      resolve: (_, __, ctx) => {
        const user_id = ctx.user.user_id
        console.log(`user_id: ${ctx.user.user_id}`)
        return ctx.prisma.user.findOne({
          where: { user_id },   
        });
      },
    }),

    t.list.field('users', {
      type: 'user',
      resolve: (_, __, ctx) => {
        return ctx.prisma.user.findMany();
      },
    })

  }
})
