frappe.provide("frappe.ui.misc");
frappe.ui.misc.about = function () {
	if (!frappe.ui.misc.about_dialog) {
		var d = new frappe.ui.Dialog({ title: __("TaskforgeHQ Framework") });

		$(d.body).html(
			repl(
				`<div>
					<p>${__("Social Links")}</p>
					<p><i class='fa fa-globe fa-fw'></i>
						${__("Website")}:
						<a href='https://taskforgehq.com' target='_blank'>https://taskforgehq.com</a></p>
					<p><i class='fa fa-github fa-fw'></i>
						${__("Source")}:
						<a href='https://github.com/taskforgehq' target='_blank'>https://github.com/taskforgehq</a></p>
					<p><i class='fa fa-linkedin fa-fw'></i>
						Linkedin: <a href='https://linkedin.com/company/taskforge-hq' target='_blank'>https://linkedin.com/company/taskforge-hq</a></p>
					<p><i class='fa fa-twitter fa-fw'></i>
						Twitter: <a href='https://twitter.com/taskforgehq' target='_blank'>https://twitter.com/taskforgehq</a></p>
					<p><i class='fa fa-youtube fa-fw'></i> 
						YouTube: <a href='https://www.youtube.com/@TaskForgeHQ' target='_blank'>https://www.youtube.com/@TaskForgeHQ</a></p>
					<p>
						<b>
							<a href="/attribution" target="_blank" class="text-muted">
								${__("Dependencies & Licenses")}
							</a>
						</b>
					</p>
					<hr>
					<p class='text-muted'>${__("&copy; TaskforgeHQ Technologies Pvt. Ltd. and contributors")} </p>
					</div>`,
				frappe.app
			)
		);

		frappe.ui.misc.about_dialog = d;
	}

	frappe.ui.misc.about_dialog.show();
};