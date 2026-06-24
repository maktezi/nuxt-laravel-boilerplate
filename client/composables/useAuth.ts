import { loginMutation, logoutMutation, me } from '~/graphql/auth'

interface AuthUser {
    id: string;
    name: string;
    email: string;

}

export const useAuth = () => {
    const token = useCookie('auth_token', { maxAge: 60 * 60 * 24 * 7 })
    const user: Ref<AuthUser | null> = useState('user', () => null)

    const login = async (email: string, password: string) => {
        const { mutate } = useMutation(loginMutation)
        const result = await mutate({ email, password })
        const payload = result?.data?.login

        if (payload?.token) {
            token.value = payload.token
            user.value = payload.user
        }

        return payload
    }

    const logout = async () => {
        const { mutate } = useMutation(logoutMutation)
        try {
            await mutate()
        } catch (error) {
            if (error instanceof Error) console.log(error.message)
            else console.log('An error occurred during logout.')
        } finally {
            token.value = null
            user.value = null
            await navigateTo('/login')
        }
    }

    const fetchMe = () => {
        const { error, loading, result } = useQuery(me, null, {
            fetchPolicy: 'network-only'
        })

        watch(result, (val) => {
            if (val?.me) user.value = val.me
        })

        return { error, loading }
    }

    const isAuthenticated = computed(() => !!token.value)

    return { fetchMe, isAuthenticated, login, logout, token, user }
}
