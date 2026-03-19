<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Auth;

final class Login
{
    public function __invoke($_, array $args): array
    {
        if (!Auth::attempt([
            'email' => $args['email'],
            'password' => $args['password'],
        ])) {
            throw new \Exception('The provided credentials are incorrect');
        }

        $user = Auth::user();

        if (!$user->is_active) {
            throw new \Exception('Account not activated, please contact the administrator');
        }

        $tokenResult = $user->createToken('Auth Token');

        return [
            'token' => $tokenResult->accessToken,
            'user' => $user,
        ];
    }
}
