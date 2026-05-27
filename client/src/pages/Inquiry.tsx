import { useState } from "react";
import Layout from "@/components/Layout";
import { Upload, Send } from "lucide-react";

export default function Inquiry() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        company: "",
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setFile(null);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="py-16" style={{ background: "oklch(0.28 0.08 250)" }}>
        <div className="container">
          <div className="text-xs font-semibold tracking-widest mb-2" style={{ color: "oklch(0.65 0.08 255)", fontFamily: "'IBM Plex Mono', monospace" }}>
            CUSTOMER INQUIRY
          </div>
          <h1 className="text-4xl font-black text-white">고객문의</h1>
          <p className="text-base mt-4 text-gray-200">
            궁금한 점이나 제품 관련 문의사항이 있으시면 아래 폼을 작성해주세요. 빠른 시간 내에 답변드리겠습니다.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container max-w-3xl">
          {submitted ? (
            <div
              className="p-8 rounded-2xl text-center"
              style={{ background: "oklch(0.96 0.005 250)", border: "2px solid oklch(0.55 0.18 255)" }}
            >
              <div className="text-5xl mb-4">✓</div>
              <h2 className="text-2xl font-black mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>
                문의가 접수되었습니다
              </h2>
              <p style={{ color: "oklch(0.45 0.02 250)" }}>
                입력하신 이메일로 확인 메일이 발송되었습니다. 빠른 시간 내에 답변드리겠습니다.
              </p>
              <p className="mt-4 text-sm" style={{ color: "oklch(0.55 0.18 255)" }}>
                전화: 053-587-1106 | 이메일: cine110@nate.com
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>
                  회사명
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="회사명을 입력해주세요"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>
                    이름 <span style={{ color: "oklch(0.577 0.245 27.325)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력해주세요"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>
                    이메일 <span style={{ color: "oklch(0.577 0.245 27.325)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일을 입력해주세요"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>
                  연락처 <span style={{ color: "oklch(0.577 0.245 27.325)" }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="연락처를 입력해주세요 (예: 010-1234-5678)"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>
                  제목 <span style={{ color: "oklch(0.577 0.245 27.325)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="문의 제목을 입력해주세요"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>
                  내용 <span style={{ color: "oklch(0.577 0.245 27.325)" }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="문의 내용을 입력해주세요"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "oklch(0.18 0.04 250)" }}>
                  첨부파일
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-input"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif"
                  />
                  <label
                    htmlFor="file-input"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed cursor-pointer transition-colors"
                    style={{
                      borderColor: "oklch(0.55 0.18 255)",
                      background: "oklch(0.96 0.005 250)",
                    }}
                  >
                    <Upload size={18} style={{ color: "oklch(0.55 0.18 255)" }} />
                    <span style={{ color: "oklch(0.55 0.18 255)" }}>
                      {file ? file.name : "파일을 선택하거나 드래그하세요"}
                    </span>
                  </label>
                  <p className="text-xs mt-2" style={{ color: "oklch(0.55 0.18 255)" }}>
                    최대 10MB, 지원 형식: PDF, DOC, XLS, JPG, PNG, GIF
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                style={{
                  background: "oklch(0.28 0.08 250)",
                  color: "white",
                }}
              >
                <Send size={20} />
                문의 제출
              </button>
            </form>
          )}
        </div>
      </div>

      <div
        className="py-12"
        style={{ background: "oklch(0.96 0.005 250)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "oklch(0.28 0.08 250)" }}
              >
                <span style={{ color: "white", fontSize: "20px" }}>📞</span>
              </div>
              <h3 className="font-bold mb-1" style={{ color: "oklch(0.18 0.04 250)" }}>
                전화
              </h3>
              <p style={{ color: "oklch(0.45 0.02 250)" }}>053-587-1106</p>
            </div>
            <div className="text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "oklch(0.28 0.08 250)" }}
              >
                <span style={{ color: "white", fontSize: "20px" }}>✉️</span>
              </div>
              <h3 className="font-bold mb-1" style={{ color: "oklch(0.18 0.04 250)" }}>
                이메일
              </h3>
              <p style={{ color: "oklch(0.45 0.02 250)" }}>cine110@nate.com</p>
            </div>
            <div className="text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "oklch(0.28 0.08 250)" }}
              >
                <span style={{ color: "white", fontSize: "20px" }}>📍</span>
              </div>
              <h3 className="font-bold mb-1" style={{ color: "oklch(0.18 0.04 250)" }}>
                주소
              </h3>
              <p style={{ color: "oklch(0.45 0.02 250)" }}>대구 서구 상리동</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
