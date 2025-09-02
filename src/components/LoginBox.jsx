import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "../components/ui/Card.tsx";
import { Input } from "../components/ui/Input.tsx";

export default function LoginBox({email, setEmail, password, setPassword, err, onSubmit}) {
    return (
       <Card className="w-full max-w-md mx-auto mt-20 bg-slate-900/50 border-green-800/50 shadow-lg shadow-white/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
                        Benvenuto Avventuriero
                    </CardTitle>
                    <CardDescription className="text-white text-lg">
                        La tua campagna ti attende
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-slate-800/50 border-green-800/50 text-white placeholder-green-300/50 backdrop-blur-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-slate-800/50 border-green-800/50 text-white placeholder-green-300/50 backdrop-blur-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-600 to-green-900 hover:from-green-900 hover:to-green-600 text-white font-semibold py-3 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
                        >
                            Enter
                        </button>
                    </form>
                </CardContent>
            </Card>
    );
}