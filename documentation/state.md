```js

state: {
    currentUser: {
        id, 
        username, 
        name, 
        icon_url, 
        description, 
        groups, 
        likes, 
        groups_moderating,
        received_invites,
        sent_invites,
        friends
    },
    users: {
        id: {
            id, 
            username, 
            name, 
            icon_url,
            description,
            groups,
            likes
        }
    },
    groups: {
        id: {
            id,
            owner_id,
            name,
            description,
            private,
            users,
            moderators
        }
    },
    invites: {
        sent: {
            id: {
                id,
                invitee_id,
                group_id,
                type
            }
        }.
        received: {
            id: {
                id,
                inviter_id,
                group_id,
                type
            }
        }
    },
    posts: {
        id: {
            id,
            user_id,
            group_id,
            title,
            content,
            created_on,
            last_modified,
            users_liked,
            comments
        }
    },
    comments: {
        id: {
            id,
            post_id,
            user_id,
            content,
            created_on,
            last_modified
        }
    }
}