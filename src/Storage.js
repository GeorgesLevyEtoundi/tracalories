class MyStorage {
	static getCalorieLimit(defaultLimit = 2000) {
		let calorieLimit;

		if (localStorage.getItem('calorieLimit') === null) {
			calorieLimit = defaultLimit;
		} else {
			calorieLimit = +localStorage.getItem('calorieLimit');
		}

		return calorieLimit;
	}

	static setCalorieLimit(calorieLimit) {
		localStorage.setItem('calorieLimit', calorieLimit);
	}

	static getTotalCalories(defaultCalories = 0) {
		let totalCalories;

		if (localStorage.getItem('totalCalories') === null) {
			totalCalories = defaultCalories;
		} else {
			totalCalories = +localStorage.getItem('totalCalories');
		}

		return totalCalories;
	}

	static updateTotalCalories(calories) {
		localStorage.setItem('totalCalories', calories);
	}

	static getMeals() {
		let meals;

		if (localStorage.getItem('meals') === null) {
			meals = [];
		} else {
			meals = JSON.parse(localStorage.getItem('meals'));
		}

		return meals;
	}

	static saveMeal(meal) {
		const meals = MyStorage.getMeals();
		meals.push(meal);
		localStorage.setItem('meals', JSON.stringify(meals));
	}

	static removeMeal(id) {
		const meals = MyStorage.getMeals();
		localStorage.setItem(
			'meals',
			JSON.stringify(meals.filter(meal => meal.id !== id))
		);
	}

	static getWorkouts() {
		let workouts;

		if (localStorage.getItem('workouts') === null) {
			workouts = [];
		} else {
			workouts = JSON.parse(localStorage.getItem('workouts'));
		}

		return workouts;
	}

	static saveWorkout(workout) {
		const workouts = MyStorage.getWorkouts();
		workouts.push(workout);
		localStorage.setItem('workouts', JSON.stringify(workouts));
	}

	static removeWorkout(id) {
		const workouts = MyStorage.getWorkouts();
		localStorage.setItem(
			'workouts',
			JSON.stringify(workouts.filter(workout => workout.id !== id))
		);
	}

	static clear() {
		localStorage.removeItem('totalCalories');
		localStorage.removeItem('meals');
		localStorage.removeItem('workouts');
	}
}

export default MyStorage;
