import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styles: [
    `
      .page-wrapper {
        min-height: 100vh;
        background-color: #fdfbfd;
        padding: 4rem 1rem;
        font-family: 'Segoe UI', Roboto, Helvetica, sans-serif;
      }

      .bento-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2.5rem;
        max-width: 1100px;
        margin: 0 auto;
      }

      @media (min-width: 768px) {
        .bento-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      /* The Pastel Boxes */
      .pastel-box {
        border: 5px solid #d8b4e2; /* Pastel Purple */
        border-radius: 3rem;
        background-color: white;
        min-height: 280px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
      }

      .pastel-box:hover {
        transform: translateY(-8px);
        border-color: #ffffff;
        box-shadow:
          -15px -15px 30px rgba(255, 182, 193, 0.8),
          15px -15px 30px rgba(253, 253, 150, 0.8),
          -15px 15px 30px rgba(174, 198, 207, 0.8),
          15px 15px 30px rgba(203, 153, 201, 0.8);
      }

      /* Styles specifically for the Detail View */
      .detail-container {
        max-width: 800px;
        margin: 0 auto;
        animation: fadeIn 0.4s ease-in-out;
      }

      .detail-box {
        border: 5px solid #d8b4e2;
        border-radius: 3rem;
        background-color: white;
        padding: 4rem;
        text-align: left;
      }

      .back-btn {
        background: none;
        border: 3px solid #d8b4e2;
        color: #b580c5;
        font-weight: 800;
        font-size: 1rem;
        padding: 0.8rem 1.5rem;
        border-radius: 2rem;
        cursor: pointer;
        margin-bottom: 2rem;
        transition: all 0.3s ease;
      }

      .back-btn:hover {
        background: #d8b4e2;
        color: white;
        transform: translateX(-5px);
      }

      /* Typography */
      .box-title {
        font-size: 1.5rem;
        font-weight: 800;
        color: #4a4a4a;
        margin-bottom: 1rem;
      }

      .detail-title {
        font-size: 2.5rem;
        font-weight: 900;
        color: #4a4a4a;
        margin-bottom: 1.5rem;
        border-bottom: 3px solid #f0e6f2;
        padding-bottom: 1rem;
      }

      .box-text {
        font-size: 1rem;
        color: #6b6b6b;
        line-height: 1.6;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class AppComponent {
  public selectedBox: string | null = null;

  public openBox(boxId: string): void {
    this.selectedBox = boxId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public closeBox(): void {
    this.selectedBox = null;
  }
}
