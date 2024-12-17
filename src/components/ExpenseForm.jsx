import { categories } from "../App";

const ExpenseForm = () => {
  return (
    <>
      <form action="">
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input id="description" type="text" className="form-control" />
          <label htmlFor="amount" className="form-label">
            amount
          </label>
          <input id="amount" type="number" className="form-control" />
          <label htmlFor="category" className="form-label">
            category
          </label>
          <select name="" id="category" className="form-select">
            <option value="">All category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button className="btn btn-info my-2">button</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
