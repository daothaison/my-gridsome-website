---
id: sondt
date: 2019-04-24 14:04:27
title: '「Docker #1」Tổng quan về Docker'
author: sondt
categories: [ docker ]
image: ../../images/temp/1.jpg
description: Lịch sử hình thành của Docker 
---

### The bad old days

**Server** là mạng sống của doanh nghiệp, nếu server sập, đồng nghĩa doanh nghiệp sập. Điều này thì đặc biệt đúng với các công ty công nghệ.

Ngày xưa, đa phần các server chạy linux hay windows đều chưa có một công nghệ hoàn chỉnh cho việc chạy nhiều ứng dụng trên một server. Điều này lý giải cho việc, đa số các ứng dụng sẽ gắn liền với một server duy nhất.

```
1 server - 1 application.
```

Điều này vẫn đúng với thời điểm hiện tại.

Và hiển nhiên, khi mua 1 con server cho ứng dụng của mình, đa phần các công ty không quyết định trước được rằng ứng dụng sẽ cần tài nguyên như thế nào, và để đảm bảo đáp ứng mọi nhu cầu phát sinh. **Họ chọn server mạnh và lớn nhất có thể 😙** Kỷ nguyên của lãng phí tài nguyên lên ngôi.

### Hello VMware

Lúc bấy giờ, công ty công nghệ **VMware, Inc** mang tới thế giới một món quà - Máy ảo (VM). Và gần như trong một đêm, thế giới trở nên tốt hơn bao giờ hết. 😂

**Ảo hoá** giúp chúng ta có một cơ chế an toàn và bảo mật để chạy nhiều ứng dụng trên cùng một server.

```
1 server - n application.
```

Điều này thay đổi cuộc chơi công nghệ hoàn toàn và giúp giảm thiểu chi phí đi rất rất nhiều cho doanh nghiệp.

### VM..but

Nhưng... vẫn luôn là _nhưng_! VMs càng tốt bao nhiêu, thì nó càng xa sự hoàn hảo bấy nhiêu.

Đấy là sự thật, trên thực tế, VM yêu cầu một hệ điều hành (OS) riêng cho chính nó. Đi kèm với một hệ điều hành là CPU, RAM và hệ thống ổ cứng lưu trữ đủ lớn của riêng nó.

một model của VM cũng đòi hỏi thời gian boot tương đối lâu và việc lưu chuyển, swap nó giữa các clouds cũng khó hơn cần thiết.

### Hello Containers!

Không lâu sau đó, các ông lớn trong làng giải trí, nhầm, làng công nghệ, như Google, đã sử dụng công nghệ **Container** để giải quyết các thiếu sót của VM Model.

Container cũng gần tương tự như VM. Điểm khác biệt lớn nhất là các Container không yêu cầu OS của riêng nó. Điều này mang lại ý nghĩa gì?

Đó là tất cả Container trên một server có thể sử dụng chung một OS. Điều này giải phóng một lượng lớn CPU, RAM, và ổ cứng bị chia nhỏ không cần thiết.

Container còn đặc biệt _nhanh_ và _linh hoạt_. Việc boot một container bây giờ sẽ nhanh hơn rất nhiều (Bỏ qua khâu cài đặt OS, v.v..). Việc di chuyển container từ laptop của bạn tới cloud hay bất kỳ data center nào khác là cực kỳ dễ dàng.


### Linux containers

Những mô hình container đầu tiên được bắt đầu trên Linux, và được đóng góp rất nhiều bởi cồng đồng, Google LLC cũng đóng góp một lượng lớn các công nghệ container cho Linux Kernel. Nếu không có những nhân tố này, chắc chúng ta không có container xịn xò như hôm nay.

Những công nghệ chính đưa container phát triển như ngày nay bao gồm **kernel namespaces, control groups, union filesystems**, và hiển nhiên rồi, **Docker**.

Có thể nói **Docker** là một bước chuyển mình khác của container. Vì container ban đầu vẫn là khó sử dụng với các doanh nghiệp và cộng đồng. Cho tới khi **Docker** wrapup và giúp mọi thứ dễ dàng hơn.

Chúng ta sẽ nói trực tiếp về Docker ở bài tiếp theo nhé, còn ở bài này vẫn có một số khái niệm nữa tôi cần giới thiệu với các bạn :3


### Windows container

Vào năm 2016, sau quãng thời gian nhìn Docker và Linux Container lật tung cả thế giới, ông lớn Microsoft cũng không thể làm ngơ thị trường béo bở này được nữa. Microsoft cùng với đội ngũ của mình đã làm việc cật lực với cộng đồng và công ty Docker để cho ra đời Windows Container.

Windows Container chạy trên Windows Kernel, thay vì Linux. Có nhiều thay đổi đối với người sử dụng, Nhưng Microsoft đã làm cho những phần này dễ dàng đi để chúng ta có thể thao tác giống với Linux vậy.

Tuy nhiên, điều này tạo ra 2 nền tảng, có nghĩa là ứng dụng của bạn viết trên Windows thì khó có khả năng chạy trên linux nhé, và ngược lại.

Bạn có thể sử dụng Docker để switch qua lại giữa 2 loại Windows container và Linux container này. (lưu ý Docker yêu cầu **Windows 10 Pro**).

### Kubernetes

Tôi sẽ đề cập rất ngắn gọn Kubernetes, vì nó cũng nằm ngoài phạm vi series này. Tuy nhiên, bạn vẫn cần biết nó.

Kubernetes là một open-source của Google dùng để tự động hoá việc quản lý, scaling và triển khai ứng dụng dưới dạng container hoá, Kubernetes còn gọi là **Container orchestration engine**.

Việc sử dụng Docker chỉ giúp bạn container hoá ứng dụng của mình thôi, còn muốn quản lý hàng chục cái container đó, bạn phải nghĩ tới Kubernetes.

Tạm hiểu: Container là các thùng hàng. Docker là người vận chuyển nó (hình chú cá voi). Còn điều hướng hay chỉ định cho chú cá voi này là Kubernetes


### Tóm tắt

Chúng ta đã từng sống trong thế giới mà mỗi ứng dụng đòi hỏi theo nó là một server đủ lớn. Kéo theo nhiều vấn đề bất cập về tài nguyên. VM giải quyết các vấn đề này nhưng vẫn còn những điểm chưa được hoàn hảo. Cho tới khi container và Docker tới và thay đổi mọi thứ.

Hãy đọc về Docker ở chương tiếp theo nhé 😗
