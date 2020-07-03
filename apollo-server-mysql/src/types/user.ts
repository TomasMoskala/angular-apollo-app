import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'user',
  definition(t) {
    t.model.user_id();
    t.model.user_name();
  }
})
