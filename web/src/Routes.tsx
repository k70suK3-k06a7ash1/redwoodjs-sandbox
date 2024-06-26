// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from "@redwoodjs/router";

import ScaffoldLayout from "src/layouts/ScaffoldLayout";

import { useAuth } from "./auth";

const Routes = () => {
	return (
		<Router useAuth={useAuth}>
			<Route path="/" page={HomePage} name="home" />
			<Route path="/login" page={LoginPage} name="login" />
			<Route path="/signup" page={SignupPage} name="signup" />
			<Route
				path="/forgot-password"
				page={ForgotPasswordPage}
				name="forgotPassword"
			/>
			<Route
				path="/reset-password"
				page={ResetPasswordPage}
				name="resetPassword"
			/>
			<Route path="/sample" page={SamplePage} name="sample" />
			<Set
				wrap={ScaffoldLayout}
				title="Todos"
				titleTo="todos"
				buttonLabel="New Todo"
				buttonTo="newTodo"
			>
				<Route path="/todos/new" page={TodoNewTodoPage} name="newTodo" />
				<Route
					path="/todos/{id:Int}/edit"
					page={TodoEditTodoPage}
					name="editTodo"
				/>
				<Route path="/todos/{id:Int}" page={TodoTodoPage} name="todo" />
				<Route path="/todos" page={TodoTodosPage} name="todos" />
			</Set>
			<Set
				wrap={ScaffoldLayout}
				title="Posts"
				titleTo="posts"
				buttonLabel="New Post"
				buttonTo="newPost"
			>
				<Route path="/posts/new" page={PostNewPostPage} name="newPost" />
				<Route
					path="/posts/{id:Int}/edit"
					page={PostEditPostPage}
					name="editPost"
				/>
				<Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
				<Route path="/posts" page={PostPostsPage} name="posts" />
			</Set>
			<Route notfound page={NotFoundPage} />
		</Router>
	);
};

export default Routes;
