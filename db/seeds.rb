# User.destroy_all
User.destroy_all
user_data = {
    email: 'fate@fate.com',
    password: 'admin123',
    password_confirmation: 'admin123'
}
test_user = User.create(user_data)
if test_user.valid?
    puts "User created successfully"
    else puts "incorrect #{test_user.errors.full_messages}"
end
events = [
    {
        image_url: 'https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612',
        category: 'dogs',
        is_public: true,
        description: 'Test picture 1'
    },
    {
        image_url: 'https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?s=612x612',
        category: 'dogs',
        is_public: true,
        description: 'Test picture 2'
    }
]
events.each do |event|
    test_user.events.create event
    puts "creating event #{event}"
 end