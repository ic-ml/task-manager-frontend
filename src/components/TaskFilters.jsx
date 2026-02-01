const TaskFilters = ({
    search,
    setSearch,
    priority,
    setPriority,
    sort,
    setSort
}) => {
    return(
 <div className="flex flex-col gap-3 mb-4">

      <input
        className="border p-2 rounded-lg text-sm"
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex gap-2">

        <select
          className="border p-2 rounded-lg text-sm flex-1"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">All priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          className="border p-2 rounded-lg text-sm flex-1"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">No sorting</option>
          <option value="date-asc">Due date ↑</option>
          <option value="date-desc">Due date ↓</option>
        </select>

      </div>
    </div>
    );
};

export default TaskFilters;
