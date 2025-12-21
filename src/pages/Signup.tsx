import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";


export function Signup() {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48">
            <Input placeholder="Username" />
            <Input placeholder="Password" />

            <Button variant="primary" text="Signup" fullWidth={true} loading={false} />
        </div>
    </div>
}