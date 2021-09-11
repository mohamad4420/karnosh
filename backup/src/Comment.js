
export default function Comment(){
    return(
        <>     
	<div className="container">
		<div className="col-md-12" id="fbcomment">
			<div className="body_comment">
				<div className="row">
					<div className="avatar_comment col-md-1">
					  <img src="/my.jpg" alt="avatar"/>
					</div>
					<div className="box_comment col-md-11">
					  <textarea className="commentar" placeholder="اكتب هنا ..."></textarea>
					  <div className="box_post">
						<div className="pull-right">
						  <span>
							<i className="fa fa-caret-down"></i>
						  </span>
						  <button  type="button" value="1">ارسال</button>
						</div>
					  </div>
					</div>
				</div>
				<div className="row">
					<ul id="list_comment" className="col-md-12">
						<li className="box_result row">
							<div className="avatar_comment col-md-1">
								<img src="/my.jpg" alt="avatar"/>
							</div>
							<div className="result_comment col-md-11">
								<h4>محمد</h4>
								<p>كثير حلو </p>
								<div className="tools_comment">
									<a className="like" href="#">Like</a>
									<span aria-hidden="true"> · </span>
									<a className="replay" href="#">Reply</a>
									<span aria-hidden="true"> · </span>
									<i className="fa fa-thumbs-o-up"></i> <span className="count">1</span> 
									<span aria-hidden="true"> · </span>
									<span>26m</span>
								</div>
								<ul className="child_replay">
									<li className="box_reply row">
										<div className="avatar_comment col-md-1">
											<img src="/basher.jpg" alt="avatar"/>
										</div>
										 <div className="result_comment col-md-11">
											<h4>بشير</h4>
											<p>اه كثير حلو</p>
											<div className="tools_comment">
												<a className="like" href="#">Like</a>
												<span aria-hidden="true"> · </span>
												<a className="replay" href="#">Reply</a>
												<span aria-hidden="true"> · </span>
												<i className="fa fa-thumbs-o-up"></i> <span className="count">1</span> 
												<span aria-hidden="true"> · </span>
												<span>26m</span>
											</div>
											<ul className="child_replay"></ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						
					</ul>
				<button className="show_more" type="button">تحميل المزيد من التعليقات</button>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}