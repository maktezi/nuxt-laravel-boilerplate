import gql from 'graphql-tag'

export const loginMutation = gql`
    mutation loginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            ok
            token
            user {
                id
                name
                email
            }
            token_type
            expires_at
        }
    }
`

export const logoutMutation = gql`
    mutation logoutMutation {
        logout {
            message
        }
    }
`

export const me = gql`
    query me {
        me {
            id
            name
            email
        }
    }
`
