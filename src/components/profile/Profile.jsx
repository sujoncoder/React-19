import Avatar from "./Avatar"
import Card from "./Card"

const Profile = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Card>
                <Avatar
                    size={100}
                    person={{
                        name: "Jerin Jaman",
                        imageId: 'YfeOqp2'
                    }}
                >
                </Avatar>
            </Card>
        </div >
    )
}

export default Profile