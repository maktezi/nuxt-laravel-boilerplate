<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Auth;

final class Logout
{
    public function __invoke($rootValue, array $args, $context, $info): array
    {
        $user = Auth::guard('api')->user();

        if (! $user) {
            throw new \Exception('Unauthenticated');
        }

        $token = $user->token();
        if ($token) {
            $token->revoke();
        }

        return [
            'message' => 'Logged out successfully',
        ];
    }
}
