function RecentActivity() {
	return (
		<div className="recent-activity-container">
			<div>
				<h4 className="sub-title">Recent Activity</h4>
				<p>View All</p>
			</div>

			<div className="activity-content">
				<div>
					<div className="logo">1</div>

					<div className="content-body">
						<div>
							<h5 className="content-body-title">
								Move assistance for Mrs. Higgins
							</h5>

							<p>IN PROGRESS</p>
						</div>
						<p>Helping with 4 heavy boxes and a bookshelf.</p>

						<p>
							<span>*</span> Your Offer Accepted{" "}
							<span>Scheduled: Tomorrow, 2:00PM</span>
						</p>
					</div>
				</div>

				<div>
					<div className="logo">2</div>

					<div className="content-body">
						<div>
							<h5 className="content-body-title">
								Dog walking - Cooper the Golden
							</h5>

							<p>PENDING</p>
						</div>

						<p>30 minutes walk around the park loop.</p>

						<p>
							<span>*</span> Awaiting Response{" "}
							<span>Posted 2h ago</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RecentActivity;
