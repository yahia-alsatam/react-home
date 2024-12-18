import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

import categories from "./categories";

function App() {
  const [selectCategory, setSelectCategory] = useState("");

  const [expenses, setexpenses] = useState([
    { id: 1, description: "aa", amount: 10, category: "Utilities" },
    { id: 2, description: "bb", amount: 10, category: "Utilities" },
    { id: 3, description: "cc", amount: 10, category: "Utilities" },
    { id: 4, description: "dd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setexpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setexpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
