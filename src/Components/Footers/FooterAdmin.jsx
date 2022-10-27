import React from 'react';

export default function FooterAdmin() {
	return (
		<>
	 <footer className="footer">
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6">
            <div className="copyright text-center text-xl-left text-muted">
              &copy; 2022 <a href="https://discord.gg/tUyu65xcUh" className="font-weight-bold ml-1" target="_blank" rel="noreferrer">DevsCloud</a>
            </div>
          </div>
          <div className="col-xl-6">
            <ul className="nav nav-footer justify-content-center justify-content-xl-end">
              <li className="nav-item">
                <a href="https://discord.gg/tUyu65xcUh" className="nav-link" target="_blank" rel="noreferrer">Discord</a>
              </li>
              <li className="nav-item">
                <a href="https://discord.gg/tUyu65xcUh" className="nav-link" target="_blank" rel="noreferrer">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
		</>
	);
}
