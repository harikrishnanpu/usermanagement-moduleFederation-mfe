export class UserManager {
    users = [];
    nextId = 1;
    findByEmail(email) {
        return this.users.find((user) => user.email === email);
    }
    findById(id) {
        return this.users.find((user) => user.id === id);
    }
    create(input) {
        const user = {
            id: this.nextId++,
            name: input.name,
            email: input.email,
            password: input.password,
        };
        this.users.push(user);
        return user;
    }
    toPublic(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    }
}
