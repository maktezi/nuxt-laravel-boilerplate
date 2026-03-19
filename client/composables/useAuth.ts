const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout {
      message
    }
  }
`

const ME_QUERY = gql`
  query Me {
    me {
      id
      name
      email
    }
  }
`

export const useAuth = () => {
  const token = useCookie('auth_token', { maxAge: 60 * 60 * 24 * 7 })
  const user = useState('user', () => null)
  const router = useRouter()

  const login = async (email: string, password: string) => {
    const { mutate } = useMutation(LOGIN_MUTATION)
    const result = await mutate({ email, password })
    const payload = result?.data?.login

    if (payload?.token) {
      token.value = payload.token
      user.value = payload.user
    }

    return payload
  }

  const logout = async () => {
    const { mutate } = useMutation(LOGOUT_MUTATION)
    try {
      await mutate()
    } catch (e) {
      console.log(e.message || 'An error occurred during logout.')
    } finally {
      token.value = null
      user.value = null
      await router.push('/login')
    }
  }

  const fetchMe = () => {
    const { result, loading, error } = useQuery(ME_QUERY, null, {
      fetchPolicy: 'network-only'
    })

    watch(result, (val) => {
      if (val?.me) user.value = val.me
    })

    return { loading, error }
  }

  const isAuthenticated = computed(() => !!token.value)

  return { login, logout, fetchMe, user, isAuthenticated, token }
}
