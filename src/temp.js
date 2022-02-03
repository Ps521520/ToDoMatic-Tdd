<table class="table table-dark">
    <thead>
        <tr>
            <td>Task Name</td>
            <td>Is Task Completed?</td>
            <td>Delete Task</td>
        </tr>
    </thead>
    <tbody key={element.id}>
        <tr class="table-active">
            <td>{element.workname}</td>
            <td><input type="checkbox" onChange={(event) => {
                element.isComplited = event.target.checked;
                let arr = itemsarr.filter((item) => item.id !== 0);
                setitemsarr(arr);
            }} checked={element.isComplited} /></td>
            <td>< button onClick={() => {
                let arr = itemsarr.filter((item) => item.id !== element.id);
                setitemsarr(arr);
            }}>Delete Task </button></td>
        </tr>
    </tbody>
</table>