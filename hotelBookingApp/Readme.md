# Otel Rezervasyon Uygulaması (Individual Guide)

Bu proje, React Native ve Firebase kullanılarak geliştirilen bir otel rezervasyon uygulamasını içerir. 

# Son Kullanıcı Talimatları:
1. Giriş Yapma ve Kayıt Olma:
Uygulamayı açın.
Eğer daha önce kaydolmadıysanız, "Kayıt Ol" seçeneğine tıklayarak bir hesap oluşturun.
Zaten bir hesabınız varsa, "Giriş Yap" seçeneğine tıklayın.
Giriş yapmak için e-posta adresinizi ve şifrenizi girin.(email: deneme@gmail.com /password: 123456)
Başarıyla giriş yaptıktan sonra, ana ekrana yönlendirileceksiniz.
2. Otelleri İnceleme:
Ana ekranda, mevcut otellerin bir listesini göreceksiniz.
İlgili oteli seçmek için üzerine dokunun.
Otelin detaylarını görmek için "Detayları Gör" seçeneğine tıklayın.
Detay ekranında, otelin genel bilgilerini ve mevcut odaları bulabilirsiniz.
3. Oda Seçimi ve Rezervasyon:
Otel detaylarında, beğendiğiniz bir odayı seçmek için "Odayı Seç" seçeneğine tıklayın.
Oda seçimi ekranında, rezervasyon tarihini ve diğer gerekli bilgileri girin.
"Rezervasyon Yap" seçeneği ile rezervasyonunuzu tamamlayın.
4. Profil Düzenleme ve Rezervasyon Geçmişi:
Ana ekranda, sağ alt köşede bulunan profil(user) simgesine tıklayın.
Profil sayfasında, kişisel bilgilerinizi düzenleyebilirsiniz.
"Rezervasyon Geçmişi" seçeneği ile yapılan rezervasyonları görüntüleyebilirsiniz.
Proje geliştirme ortamınızı kurmak için aşağıdaki adımları takip edin.

1. Proje dizinine gidin: `cd individualguide
2. Gerekli bağımlılıkları yüklemek için terminalde şu komutu çalıştırın: `yarn install`



# Teknik Dökümantasyon:

1. Geliştirme Ortamı Kurulumu:
Bu projeyi klonlayın: git clone https://github.com/gonulgulsen/individualguide uygulama.git
Proje dizinine gidin: cd individualguide
Gerekli bağımlılıkları yüklemek için terminalde şu komutu çalıştırın: yarn install
2. Firebase Konfigürasyonu:
Firebase Console'a gidin ve yeni bir proje oluşturun.
Firebase Authentication'ı etkinleştirin ve e-posta/şifre tabanlı kimlik doğrulamayı etkinleştirin.
Firestore database'i oluşturun.
Oluşturulan projenin Firebase SDK yapılandırma bilgilerini, proje içindeki ../firebaseconfig.js dosyasına ekleyin.
3. Uygulamayı Çalıştırma:
Proje dizininde, terminalde şu komutu çalıştırarak uygulamayı başlatın: yarn start
Uygulama, geliştirme modunda localhost üzerinde çalışacaktır.
Tarayıcınızdan veya emülatörünüzden uygulamayı görüntüleyebilirsiniz.


