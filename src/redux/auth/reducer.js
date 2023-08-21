const initialState = {
    user: [
        { id: 0, email: "", password: "" },
    ],

};
// Используем initialState как значение состояния по умолчанию
export const authReducer = (state = initialState, action) => {
    // Редюсер различает экшены по значению свойства type
    switch (action.type) {
        // В зависимости от типа экшена будет выполняться разная логика
        default:
            // Каждый редюсер получает все экшены отправленные в стор.
            // Если редюсер не должен обрабатывать какой-то тип экшена,
            // необходимо вернуть существующее состояние без изменений.
            return state;
    }
};