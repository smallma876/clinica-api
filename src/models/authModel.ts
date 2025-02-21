import { getConnection } from '../config/db';
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

export class AuthModel {
    static async login(document, password) {
        let connection;
        try {
            connection = await getConnection();
            const [rows] = await connection.execute('SELECT * FROM users WHERE dni = ?', [document]);
            const [user] = rows;

            if (user && (await bcrypt.compare(password, user.password_hash))) {
                const token = Jwt.sign({ user }, 'secret-key', {
                    expiresIn: '1h',
                });
                return token;
            }

            return null;
        } catch (error) {
            throw new Error(error);
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    static async updatePassword(document, password) {
        let connection;
        try {
            connection = await getConnection();
            const passwordHash = await bcrypt.hash(password, 10);
            const [result] = await connection.execute('UPDATE users SET password_hash = ? WHERE dni = ?', [
                passwordHash,
                document,
            ]);
            const affectedRows = result.affectedRows;
            return affectedRows > 0;
        } catch (error) {
            throw new Error(error);
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }
}
