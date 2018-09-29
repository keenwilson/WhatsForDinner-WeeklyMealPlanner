/* editDay = function(day,\) {
	new Ajax.Updater(('row_' + date), '/files_includes/meals_table_row.php?action=' + action + '&d=' + date + '&t=' + them + '&v=' + v);
}

confirmRemove = function(date,them,meal,action) {
	new Ajax.Updater(('row_' + date), '/files_includes/meals_table_row.php?action=' + action + '&d=' + date + '&t=' + them + '&m=' + meal);
} */

    // Change the entire row to editable
    $('.edit').click(function (e) {
        e.preventDefault();
        var currentTD = $(this).parents('tr').find('td');
        if ($(this).html() == 'Edit') {
            $.each(currentTD, function () {
                $(this).prop('contenteditable', true)
            });
        } else {
            $.each(currentTD, function () {
                $(this).prop('contenteditable', false)
            });
        }

        $(this).html($(this).html() == '<a class="edit has-text-warning actions" href="#" title="Change the details of this meal"><i class="fas fa-pen" alt="Change"></i></a>' ? '<a class="add has-text-success actions" href="#" ><i class="fas fa-plus-circle" alt="Add"></i></a>' : '<a class="edit has-text-warning actions" href="#" title="Change the details of this meal"><i class="fas fa-pen" alt="Change"></i></a>')

    });

    $('.remove').click(function (e) {
        e.preventDefault();
        return false;
    })